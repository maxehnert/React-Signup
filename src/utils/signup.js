import axios from 'axios'
import valid from 'card-validator'

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

const validateCC = (stateObj, cb) => {
  const numberValidation = valid.number(stateObj.signupCardNumber)
  console.log(numberValidation);

  if (!numberValidation.isValid) {
    console.log('its bad');
    cb(false)
    this.onChange(true)

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
        this.onChange(true)
  }
}

export default validateCC
