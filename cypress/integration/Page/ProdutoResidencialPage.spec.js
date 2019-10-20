class ProdutoResidencialPage{

    prodSeguroResidencial(){
        cy.get(':nth-child(2) > .featured-products__item > .button-rounded').click()
        cy.contains('Hello, Youser!');
    }

    enderecoCep(endCep){
        cy.get('#location_address').click()
        cy.get('#home_order_flow_pricing_requirements_property_attributes_address_attributes_street').type(endCep)
        cy.get('.address-predictions__item').click()

    }

    dadosEndereco(endNumero, endCompl){
        cy.get('#home_order_flow_pricing_requirements_property_attributes_address_attributes_number').click()
        cy.get('#home_order_flow_pricing_requirements_property_attributes_address_attributes_number').type(endNumero)
        cy.get('#home_order_flow_pricing_requirements_property_attributes_address_attributes_complement').click()
        cy.get('#home_order_flow_pricing_requirements_property_attributes_address_attributes_complement').type(endCompl)
    }

    btnEnderecoPronto(){
        cy.get('.modal-form__ready-button > .button').click()
    }

    residenciaTipo(){
        cy.wait(1000);
        cy.get(':nth-child(1) > .property-type__icon > svg').click()
    }
    
    btnCriarSeguro(){
        cy.get('[data-narrative-form-triggered-by="property_type"] > .button').click()
    }

    coberturaAssistencia(){
        cy.server()
        cy.route('/search*', [{ item: 'O imóvel tem estrutura de madeira' }]).as('pageCoberAssist')
        cy.wait('@pageCoberAssist')
        cy.get('.coverage--highlight > .coverage__checkbox > .coverage__checkbox-label').should('contain', 'O imóvel tem estrutura de madeira')
    }


}

export default ProdutoResidencialPage;