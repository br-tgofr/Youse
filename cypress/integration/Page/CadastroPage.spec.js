class CadastroPage{

    btnCadLogin(){
        cy.get('#header-link__minha-conta').click()
    }

    btnCadCadastro(){
        cy.get('[tabindex="7"]').click()
    }

    preecherDados(strtNome, strEmail, strSenha, strConfSenha){
        cy.get('#user_name').type(strtNome)
        cy.get('#user_email').type(strEmail)
        cy.get('#user_password').type(strSenha)
        cy.get(':nth-child(7) > .floating-label-form__label').click()
        cy.get('#user_password_confirmation').type(strConfSenha)
    }

    btnEnviarCadastro(){
        cy.get('.centered-card__actions > .button').click()
    }
}

export default CadastroPage;