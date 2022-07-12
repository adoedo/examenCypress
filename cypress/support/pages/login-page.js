class Login{

    SingIn(){
        cy.get('.login').click()
    }

    inicioSesion(mail,password){
        cy.get('#email').type(mail)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin > span').click()
    }

    validaLogin(email,pass){
        cy.get(email).should('be.enabled').and('be.visible')
        cy.get(pass).should('be.enabled').and('be.visible')
    }
    
}

export default Login