class userMenu {
    selectorsList() {
        const selectors = {
            newTransactionButton: "[href='/transaction/new']",
            selectContact: "[data-test='user-list-item-uBmeaz5pX']",
            paymentAmount: "[name='amount']",
            paymentDescription: "[placeholder='Add a note']",
            submitPaymentButton: "[data-test='transaction-create-submit-payment']",
            wrongCredentialAlert: "[role='alert']"
        }

        return selectors
    } 

    accessNewTransaction() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

    accessSelectContact() {
        cy.get(this.selectorsList().selectContact).click({force: true})
    }

    fillTransactionDetails(paymentAmount, paymentDescription) {
        cy.get(this.selectorsList().paymentAmount).clear().type(paymentAmount)
        cy.get(this.selectorsList().paymentDescription).clear().type(paymentDescription)
    }  

    saveForm() {
        cy.get(this.selectorsList().submitPaymentButton).click({force: true})
    }

}

export default userMenu