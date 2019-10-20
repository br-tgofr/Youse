class ProdutoVidaPage{
    
    prodSeguroVida(){
        cy.get(':nth-child(3) > .featured-products__item > .button-rounded').click()
        cy.contains('Especialista em Seguro Vida');
    }
}

export default ProdutoVidaPage;