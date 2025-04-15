import userAccountData from '../fixtures/userAccountData.json'
import LoginPage from '../pages/loginPage.js'
import transactionHistory from '../pages/transactionHistory.js'

const loginPage = new LoginPage()
const TransactionHistory = new transactionHistory()

describe('User Transaction History - Show the personal history transaction with success ', () => {
    it('User Transaction History - Show a message indicating that user has transactions history ', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userAccountData.userSuccess.username, userAccountData.userSuccess.password)
      
      TransactionHistory.accessPersonalHistoryTransactions()
    });
  }); 

  describe('User Transaction History - Show the personal history transaction with no previous transactions ', () => {
    it('User Transaction History - Show the personal history with no transaction history ', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userAccountData.userSuccess.username, userAccountData.userSuccess.password) 

      TransactionHistory.checkMessageWithNoTransaction() 
    });
  }); 


