import Base from './base.page'
import { ELEMENTS } from './components/MagazineElements'

export class Magazine extends Base {

  static acessar_magazine_luiza() {
    cy.visit('/')
  }

  static pesquisar_produto(text) {
    super.typeValue(ELEMENTS.INP_TEXT, text, true)
    
    super.clickOnElement(ELEMENTS.BTN_PESQUISAR)
  }

  static clicar_primeiro_produto() {
    super.clickOnElement(ELEMENTS.ARRAY_PRODUCTS, 0)

  }

  static adicionar_a_sacola() {
    super.clickOnElement(ELEMENTS.ADC_SACOLA)

  }

  static validar_produto() {
    cy.get(ELEMENTS.SUB_ITENS).should('contain.text', '1 item')
  }
}
