class transactionHistory {
    selectorsList() {
        const selectors = {
            personalTransactionButton: "[href='/personal']",
            noTransactionMessage: "[data-test='empty-list-header']",
            nextGetStartedButton: "[data-test='user-onboarding-next']",
            bankNameField: "[name='bankName']",
            routingNumberField: "[name='routingNumber']",
            accountNumberField: "[name='accountNumber']", 
            saveBankAccountInfoButton: "[data-test='bankaccount-submit']",
            doneBankAccountInfoButton: "[data-test='user-onboarding-next']"
        }

        return selectors
    } 

    saveBankAccountInfo(bankName, routingNumber, accountNumber){
        cy.get(this.selectorsList().nextGetStartedButton).click()
        cy.get(this.selectorsList().bankNameField).clear().type(bankName)
        cy.get(this.selectorsList().routingNumberField).clear().type(routingNumber)
        cy.get(this.selectorsList().accountNumberField).clear().type(accountNumber)
        cy.get(this.selectorsList().saveBankAccountInfoButton).click()
        cy.get(this.selectorsList().doneBankAccountInfoButton).click()
    }

    accessPersonalHistoryTransactions() {
        cy.get(this.selectorsList().personalTransactionButton).click()
    }

    checkMessageWithNoTransaction() {
        cy.get(this.selectorsList().personalTransactionButton).click()
        cy.get(this.selectorsList().noTransactionMessage)
    }

}

export default transactionHistory