import userAccountData from '../fixtures/userAccountData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Login - Success', () => {
  it('Login - With a Valid User', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userAccountData.userSuccess.username, userAccountData.userSuccess.password)
  }) 
}) 

describe('Login - Fail', () => {
it('Login - With a Invalid User', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userAccountData.userFail.username, userAccountData.userFail.password)
  loginPage.checkAccessInvalid()
 }) 
}) 