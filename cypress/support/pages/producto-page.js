class Producto{
    clickCarritoCompra(){
        cy.get('.cart').click()
    }

    AddProducto(productos, nombreProd){
        cy.get(productos).each(($elem,index)=>{
            var nameProd = $elem.text()
            if(nameProd.includes(nombreProd)){
                cy.get('#homefeatured .ajax_add_to_cart_button').eq(index).click({force: true})
                return false
            }
        })
        cy.wait(200)
    }

    saveProd(){
        cy.get('.continue > span').click()
        cy.wait(200)
    }
    irAlCarrito(){
        cy.get('.button-medium > span').click()
    }

    imprimirNomPrePro(){
        cy.get('.ais-Hits-item').each(($elem, index)=>{
            const precio =  $elem.find('.product-card__sale-price')
            const nombre =  $elem.find('.product-info')
            cy.log("Nombre:" +nombre.text()+" - " + "PRecio: "+ precio.text())
         })
    }

    buscarProducto(producto){
        cy.get('.ais-SearchBox-input').type(producto)
    }

    seleccionarProdBuscado(nombre){
        cy.get('.ais-SearchBox-input').type(nombre)
        
        cy.get('.search-suggestion__text').each(($elem, index)=>{
            cy.log($elem.text())
            if($elem.text().includes(nombre)){
              cy.wait(1200)
              cy.get(':nth-child('+index+') > .search-suggestion__link').click() 
            }
          })
    }

    eliminarProdCarro(){
        cy.get('.cart_item').each(($elem,index)=>{
            const nombre =  $elem.find('.product-name')
    
            if(nombre.text().includes(' ')){
              cy.get('#product_7_34_0_0 > .cart_delete').click()
            }  
          })
    }

    confirmarCompra(){
        cy.get('.cart_navigation > .button > span').click()
    }
    aceptarTerminosCompra(){
        cy.get('#cgv').check()
    }
    validarPrecio(){
    let total=0
    cy.get('.cart_item').each(($elem,index)=>{
      cy.log($elem)

         const valor = $elem.find('.cart_total')
         cy.log(valor.text().replace('$',''))
         total += parseFloat(valor.text().replace('$',''))
         cy.log("Total -- "+ total)
        })
    }
    payByBank(){
        cy.get('.bankwire').click()
    }
    volverAVerOrden(){
        cy.get('.button-exclusive').click()
    }
}

export default Producto