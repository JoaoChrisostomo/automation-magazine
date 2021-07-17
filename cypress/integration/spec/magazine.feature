Feature: Pesquisar produto


    Scenario: Adicionar produto na sacola
        Given que esteja na pagina home
        When pesquisar por "computador"
        And clicar em primeiro produto
        And adicionar a sacola
        Then sera validado o subtotal de itens adicionados
