class HomePage{
    
    accederPagina(pagina){
        cy.visit(pagina)
    }

    eligirCategoriaTv(){
        cy.get('[title="Televisión"] > .styled__CategoryLink-sc-6j8ftf-1 > img').click()
    }
 
}

export default HomePage