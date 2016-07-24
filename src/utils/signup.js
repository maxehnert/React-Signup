import axios from 'axios'

module.exports = {
  saveToLS(dataObj, name) {
    // // if the data is already in LS, update it
    // if (localStorage.name === name) {
    //
    // }

    localStorage.setItem(name, JSON.stringify(dataObj))

    if (dataObj.token) {
      localStorage.setItem('token', JSON.stringify(dataObj.token))
    }
  }
}
