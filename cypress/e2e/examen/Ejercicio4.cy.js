///<reference types="Cypress"/>

import HomePage from '../../support/pages/home-page'
import Producto from '../../support/pages/producto-page'

describe('Testplan -> pruebas de automationteststore',()=>{
  const HOME = new HomePage()
  const PRO = new Producto()

  it.only('Caso de prueba 4: -> ',()=>{
    //Se ingresa a la pagina del lider
    HOME.accederPagina('https://www.lider.cl/catalogo')
    // Se hace una busqueda y se selecciona el producto para mostrar por pantalla
    PRO.seleccionarProdBuscado('Samsung s20')
    
  })

})