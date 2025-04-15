import userAccountData from '../fixtures/userAccountData.json'
import LoginPage from '../pages/loginPage.js'
import UserMenu from '../pages/userMenu.js'

const loginPage = new LoginPage()
const userMenu = new UserMenu() 

describe('User Transaction - Send money with Success', () => {
    it('User Transaction - Send money with sufficient balance', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userAccountData.userSuccess.username, userAccountData.userSuccess.password) 
      
      userMenu.accessNewTransaction()
      
      userMenu.accessSelectContact()

      userMenu.fillTransactionDetails('1000', 'test') 

      userMenu.saveForm()
    });
  }); 

  describe('User Transaction - Send money without Success', () => {
    it('User Transaction - Send money with insufficient balance', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userAccountData.userSuccess.username, userAccountData.userSuccess.password) 
      
      userMenu.accessNewTransaction()
      
      userMenu.accessSelectContact()

      userMenu.fillTransactionDetails('--------------', 'test') 

      userMenu.saveForm()
    });
  });


