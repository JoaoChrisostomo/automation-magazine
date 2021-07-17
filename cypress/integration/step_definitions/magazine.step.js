/// <reference types='cypress' />
import {Given, When, And, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import {Magazine} from '../../pages/magazine.page'

Given(`que esteja na pagina home`, () => {
    Magazine.acessar_magazine_luiza()
});

When(`pesquisar por {string}`, (pesquisa) => {
    Magazine.pesquisar_produto(pesquisa)
});

And(`clicar em primeiro produto`, () => {
	Magazine.clicar_primeiro_produto()
});

And(`adicionar a sacola`,() => {
	Magazine.adicionar_a_sacola()
});


Then(`sera validado o subtotal de itens adicionados`, () => {
	Magazine.validar_produto()
});
