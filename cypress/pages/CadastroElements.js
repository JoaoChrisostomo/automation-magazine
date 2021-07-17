import Base from './base.page'
import { ELEMENTS } from './components/magazine_elements'

export class Magazine extends Base {

  static acessar_magazine_luiza() {
    cy.visit('/')
  }

  static clicar_botao_cadastro() {
    super.clickOnElement(ELEMENTS.BTN_CADASTRO)
  }

  static inserir_email(text) {
    super.typeValue(ELEMENTS.CAMPO_CADASTRO, text, true)

  }
  static clicar_em_continuar() {
    super.clickOnElement(ELEMENTS.CONT_CADASTRO)
  }
}