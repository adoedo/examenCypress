///<reference types="Cypress"/>
///<reference types="cypress-xpath"/>

import HomePage from '../../support/pages/home-page'
import Producto from '../../support/pages/producto-page'

describe('Testplan -> pruebas de automationteststore',()=>{
  const HOME = new HomePage()
  const PRO = new Producto()

   it('Caso de prueba 3: -> : Dirigirse a una página de retail de su preferencia  ',()=>{
    
    // se ingresa a la pagina del lider 
    HOME.accederPagina('https://www.lider.cl/catalogo')
    //Se escoge la categoria de television 
    HOME.eligirCategoriaTv()
    //Se recorre la lista de televisiones y se lista sus nombres y precios
    PRO.imprimirNomPrePro()
    
  })

})