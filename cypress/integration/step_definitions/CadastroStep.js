/// <reference types='cypress' />
import {Given, When, And, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import {Magazine} from '../../pages/CadastroElements'


Given(`Que eu esteja na pagina home`, () => {
    Magazine.acessar_magazine_luiza()
	
});

When(`Abrir a aba cadastro`, () => {
    Magazine.clicar_botao_cadastro()
	
});


And(`inserir email '{string}'`, (pesquisa) => {
	Magazine.inserir_email(pesquisa)
});


And(`clicar na aba continuar`, () => {
	Magazine.clicar_em_continuar()
});



