///<reference types="Cypress"/>
///<reference types="cypress-xpath"/>

import HomePage from '../../support/pages/home-page'
import Login from '../../support/pages/login-page'
import Producto from '../../support/pages/producto-page'

describe('Testplan -> pruebas de automationteststore',()=>{
  const HOME = new HomePage()
  const LOGIN = new Login()
  const PROD = new Producto()

   it('Caso de prueba 2: -> Realizar un flujo end to end ',()=>{
      //Se ingresa a la pagina automationPractice
      HOME.accederPagina('http://automationpractice.com')
      //Se selecciona un producto 
      PROD.AddProducto(".product-name", "Blouse") 
      // Se guarda el producto 
      PROD.saveProd()
      //Se selecciona un producto 
      PROD.AddProducto(".product-name", "Printed Summer Dress") 
      // Se guarda el producto 
      PROD.saveProd()
      //Se selecciona un producto 
      PROD.AddProducto(".product-name", "Faded Short Sleeve T-shirts") 
      //se dirige al carro de compra para ver las compras seleccionadas
      PROD.irAlCarrito()
      // Se elimina un producto del carro
      PROD.eliminarProdCarro()
      //Se confirma la compra 
      PROD.confirmarCompra()
    //Se incia sesion para comprar
    LOGIN.inicioSesion("tecdemo@demo.cl","demo12345")
    //Se confirma la compra 
    PROD.confirmarCompra()
    // Se acepta los terminos de la compra
    PROD.aceptarTerminosCompra()
    //Se confirma la compra 
    PROD.confirmarCompra()
    //Se valida el precio de la compra
    PROD.validarPrecio()
    //Se paga la cuenta 
    PROD.payByBank()
    //Confirma el pago
    PROD.confirmarCompra()
    //Se vuelve para ver el detalle de la orden
    PROD.volverAVerOrden()

  })

})