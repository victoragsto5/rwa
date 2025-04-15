import signUpData from '../fixtures/signUpData.json'
import signUpPage from '../pages/signUpPage.js'

const SignUpPage = new signUpPage()

describe('Signup - Success', () => {
  it('Signup - With Valid Info', () => {
    SignUpPage.accessSignUpPage()
    SignUpPage.fillPersonalDetails(signUpData.signUpSuccess.firstname, signUpData.signUpSuccess.lastname, signUpData.signUpSuccess.username, signUpData.signUpSuccess.password, signUpData.signUpSuccess.confirmpassword)
    SignUpPage.saveForm()
  })  
})

describe('Signup - Fail', () => {
it('Signup - With Invalid Info', () => {
  SignUpPage.accessSignUpPage()
  SignUpPage.fillPersonalDetails(signUpData.signUpFail.firstname, signUpData.signUpFail.lastname, signUpData.signUpFail.username, signUpData.signUpFail.password, signUpData.signUpFail.confirmpassword)
  SignUpPage.checkSignUpInvalid()
 })
})
