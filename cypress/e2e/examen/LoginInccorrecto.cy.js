///<reference types="Cypress"/>
///<reference types="cypress-xpath"/>

import HomePage from '../../support/pages/home-page'
import Login from '../../support/pages/login-page'

describe('Testplan -> pruebas de automationteststore',()=>{
  const HOME = new HomePage()
  const LOGIN = new Login()

  it('Caso de prueba 1: -> Prueba Login Incorrect ',()=>{
      //se ingresa a la pagina web
      HOME.accederPagina('http://automationpractice.com')
      // se presiona login para iniciar sesion
      LOGIN.SingIn()
      // se valida la sesion
      LOGIN.validaLogin("#email","#passwd")
      //se inicia session con datos erroneos
      LOGIN.inicioSesion("adolfo.cid@gmail.com","clave")
      
   })

})