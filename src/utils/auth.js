import axios from 'axios'

const BASE_API_URL = 'https://api.myomnibox.com/v1/'
const BASE_CHARGIFY_URL = 'https://omniboxtv.chargify.com/'

module.exports = {
  boxLogin(email, password, token, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }

    if (token.length > 0) {
      axios.get(`${BASE_API_URL}v2-tokens?code=${token}`)
        .then((res) => {
          console.log(res);
          const resToken = res;
          axios.post(`${BASE_API_URL}v2-login`, {
            token: {
              uuid: res[0].uuid
            },
            email,
            password
          })
          .then((res) => {
            console.log('success', res);
            localStorage.setItem('user', JSON.stringify(res.data))

            localStorage.tokenUUID = resToken[0].uuid
            if (cb) cb(true)
            this.onChange(true)
          })
          .catch((error) => {
            console.log('error', error);
            if (cb) cb(false)
            this.onChange(false)
          })
        })
        .catch((error) => {
          console.log(error);
          if (cb) cb(false)
          this.onChange(false)
        })

    } else {
      axios.post(`${BASE_API_URL}v2-web-login`, {
        email,
        password
      })
      .then((res) => {
        console.log('success', res);
        localStorage.setItem('user', JSON.stringify(res.data))
        if (cb) cb(true)
        this.onChange(true)
      })
      .catch((error) => {
        console.log('error', error);
        if (cb) cb(false)
        this.onChange(false)
      })
    }
  },

  updateSubscription(subValue, subscriptionId, cb) {
    cb = arguments[arguments.length - 1]

    if (subValue > 0) {
      axios.post(`${BASE_CHARGIFY_URL}/subscriptions/${subscriptionId}/charges.json`, {
        amount: subValue
      })
      .then((res) => {
        console.log('success', res);
        if (cb) cb(true)
        this.onChange(true)
      })
      .catch((error) => {
        console.log('error', error);
        if (cb) cb(false)
        this.onChange(false)
      })
    }
  },

  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken: function () {
    return localStorage.token
  },

  logout: function (cb) {
    delete localStorage.token
    delete localStorage.user
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn: function () {
    return !!localStorage.user
  },

  onChange: function () {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}
