import Base from './base.page'
import { ELEMENTS } from './components/MagazineElements'

export class Magazine extends Base {

  static acessar_magazine_luiza() {
    cy.visit('/')
  }

  static clicar_botao_cadastro() {
    super.clickOnElement(ELEMENTS.ABA_CADASTRO)
  }

  static inserir_email(email) {
    cy.get(ELEMENTS.INSERIR_EMAIL).type(email)
      .should('have.value', email)
  }
static clicar_aba_continuar() {
  super.clickOnElement(ELEMENTS.CONT_CADASTRO) 

  }
}



