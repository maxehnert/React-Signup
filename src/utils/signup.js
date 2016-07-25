import axios from 'axios'
import valid from 'card-validator'
import { BASE_API_URL, BASE_CHARGIFY_URL } from './auth'

const saveToLS = (dataObj, name) => {
    // // if the data is already in LS, update it
    // if (localStorage.name === name) {
    //
    // }

  localStorage.setItem(name, JSON.stringify(dataObj))

  if (dataObj.token) {
    localStorage.setItem('token', JSON.stringify(dataObj.token))
  }
}

const validateCC = (stateObj, cb) => {
  const numberValidation = valid.number(stateObj.signupCardNumber)
  console.log(numberValidation);

  if (!numberValidation.isValid) {
    console.log('its bad');
    cb(false)
  }

  // if the card isn't null
  // if the cvv is valid format
  // if the cvv length of the card type matches the user input length
  // if expirationDate is valid format
  if (numberValidation.card &&
      valid.cvv(stateObj.signupCardCVV) &&
      numberValidation.card.code.size === stateObj.signupCardCVV.length &&
      valid.expirationDate(stateObj.signupCardExp)) {

        console.log(numberValidation.card.type); // 'visa'
        if (cb) cb(true)
  }
}

const signupUser = (data, token, cb) => {
  axios.post(`${BASE_API_URL}v2-signup`, {
    email: data.signupEmail,
    username: data.signupEmail,
    password: data.signupPassword1,
    firstName: data.signupFirstName,
    lastName: data.signupLastName,
    token: data.token
  })
  .then((res) => {

  })
}


export {saveToLS, validateCC, signupUser}
