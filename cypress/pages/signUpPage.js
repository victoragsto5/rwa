class signUpPage {
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            wrongSignUpInfoAlert: "[data-test='signup-confirmPassword']",
            submitButton: "[type='submit']"
        }
        
        return selectors
    } 

    accessSignUpPage(){
        cy.visit('/signup')
    }  

    fillPersonalDetails(firstName, lastName, userName, password, confirmPassword){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().userNameField).clear().type(userName)
        cy.get(this.selectorsList().passwordField).clear().type(password)
        cy.get(this.selectorsList().confirmPasswordField).clear().type(confirmPassword)
    } 

    checkSignUpInvalid(){
        cy.get(this.selectorsList().wrongSignUpInfoAlert)
     } 


    saveForm() {
        cy.get(this.selectorsList().submitButton).click()
    }
} 

export default signUpPage