import UtilsMethods from '../Utils/UtilsMethods.spec'

class ProdutoAutoPage{

    UtilsMethods

    prodSeguroAuto(){
        cy.get(':nth-child(1) > .featured-products__item > .button-rounded').click()
        cy.contains('Oi, a gente quer conhecer você melhor.')
    }

    dadosCotacao(cotNome, cotEmail, cotTel){
        cy.get('#auto_order_flow_lead_person_data_lead_person_attributes_name').click({ force: true })
        cy.get('#auto_order_flow_lead_person_data_lead_person_attributes_name').type(cotNome)
        cy.get('#auto_order_flow_lead_person_data_lead_person_attributes_email').click({ force: true })
        cy.get('#auto_order_flow_lead_person_data_lead_person_attributes_email').type(cotEmail)
        cy.get('#auto_order_flow_lead_person_data_lead_person_attributes_phone').click({ force: true })
        cy.get('#auto_order_flow_lead_person_data_lead_person_attributes_phone').type(cotTel)
        
    }

    btnCotContinuar(){
        cy.get('.button').click({ force: true })
    }
    
    dadosCarro(carPlaca, carEstaEm){
        cy.get(':nth-child(1) > .radio-button > .radio-button__fake-radio').click()
        cy.get('#auto_order_flow_pricing_requirements_vehicle_attributes_license_plate_or_vin').type(carPlaca)
        cy.get(':nth-child(1) > .form__label').click()
        cy.get('#auto_order_flow_pricing_requirements_vehicle_attributes_ownership_status').select(carEstaEm)
    } 

    dadosLocalizacao(locCep, locNumero, locComplemento){
        cy.get('#auto_order_flow_pricing_requirements_insured_person_attributes_address_attributes_zipcode').type(locCep)
        cy.get('#auto_order_flow_pricing_requirements_insured_person_attributes_address_attributes_number').click({ force: true })
        cy.get('#auto_order_flow_pricing_requirements_insured_person_attributes_address_attributes_number').type(locNumero)
        cy.get('#auto_order_flow_pricing_requirements_insured_person_attributes_address_attributes_complement').type(locComplemento)
    }

    dadosSeguradora(segCpf){
        cy.get('#auto_order_flow_pricing_requirements_insured_person_attributes_cpf').type(segCpf)
        cy.get('#auto_order_flow_pricing_requirements_insured_person_attributes_marital_status').select('single')
        cy.get('#auto_order_flow_pricing_requirements_driver_attributes_has_insurance').select('já tive')
        cy.get('#auto_order_flow_pricing_requirements_driver_attributes_has_bonuses_class').select('não tenho')
        cy.get('.narrative-form-input-radio-young-driver > .radio-button > .radio-button__fake-radio').click({ force: true })
    }

    btnSegContinuar(){
        cy.get('.form-navigation > .button').click({ force: true })
    }

    cobertAssistMenor(){
        cy.get('#preformatted-coverages-auto-plans-1 > .preformatted-coverages__content > .button').click()
    }

    btnCobertAssistContinuar(){
        cy.get('.narrative-form__field > .button').click({ force: true })
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

    cobertAssistMenor(){
        cy.get('#preformatted-coverages-auto-plans-1 > .preformatted-coverages__content > .button').click()
    }
}

export default ProdutoAutoPage;