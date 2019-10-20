class LoginPage{

    visitarUrl(){
        cy.visit('https://www.youse.com.br')
    }

    btnLogin(){
        cy.get('#header-link__minha-conta').click()
    }
    
    preencherEmail(contaEmail){
        cy.get('.floating-label-form__label').click()
        cy.get('#email').type(contaEmail)
    } 

    btnProximoPasso(){
        cy.get('.centered-card__actions > .button').click()
    }

    preencherSenha(contaSenha){
        cy.get('#user_password').click()
        cy.get('#user_password').type(contaSenha)
    }

    btnEntrar(){
        cy.get('.centered-card__actions > .button').click()
    }
}

export default LoginPage;