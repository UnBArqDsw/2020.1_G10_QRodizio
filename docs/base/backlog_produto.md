# Backlog do produto

## Histórico de versões

| Data     | Autor(es)         | Descrição            | Versão |
| -------- | ------------- | -------------------- | ------ |
| 11/09/20 | Lucas Midlhey(<a target="blank" href="https://github.com/lucasmidlhey">Lucas Midlhey</a>), Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>), Caio Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caio Beleza</a>), João Pedro(<a target="blank" href="https://github.com/lucasmidlhey">João Pedro</a>), Cauê Mateus(<a target="blank" href="https://github.com/lucasmidlhey">Cauê</a>) | Criação do documento | 0.1    |

## Introdução

Este documento tem como objetivo trazer as principais funcionalidades que foram analisadas pela equipe afim de priorizar e implantar em cada sprint do ciclo de desenvolvimento.
Fizemos um branstorming utilizando a ferramenta de edição online [hackMD](hackmd.io) e o [hangouts](https://hangouts.google.com/) do google, onde foram respondidas as seguintes perguntas:

### 1. O que o cliente deve poder fazer no sistema?

### 2. Quais seriam as features disponíveis para o restaurante?

### 3. O que as pessoas com provolégio de admin vão poder fazer?

## Requisitos elicitados (sistema)
| ID | Nome | Importância |
| -------- | -------- | -------- |
| <a href="#s01">S01</a> | O sistema deve Gerar QRCode | Must have |
| s02 | O sistema deve gerar uma nova URL da mesa para cada sessão aberta | Should have |
| s03 | O sistema deve ter Papéis de acesso (Administrador/Gerente, Garçom/Funcionário, Cliente) | Could Have |
| s04 | O sistema deve poder Gerar gráficos(consumo,mais pedidos, etc) | Could have |
| s05 | Gerar estatisticas | Could have |


## Requisitos elicitados (cliente)

| ID | Nome | Importância |
| -------- | -------- | -------- |
| c01 | O cliente deve poder Ler QRCode | Must have |
| c02 | O cliente deve poder acessar o cardádio | Must have |
| c03 | O cliente deve poder Realizar pedidos | Must have |
| c04 | O cliente deve poder Cancelar pedidos | Could have |
| c05 | O cliente deve poder Alterar pedidos | Could have |
| c06 | O cliente deve poder Visualizar pedidos | Must Have |
| c07 | O cliente deve poder Abrir mesa | Must Have |
| c08 | O cliente deve poder Cadastrar forma de pagamento | Must Have |
| c09 | O cliente deve poder Chamar garçom | Must Have |
| c10 | O cliente deve poder Alterar forma de pagamento | Could have |
| c11 | O cliente deve poder Dividir pagamento | Could Have |
| c12 | O cliente deve poder Visualizar pagamento total(da mesa) | Must have |
| c13 | O cliente deve poder Visualizar pagamento parcial(só do cliente) | Could Have |
| c14 | O cliente deve poder Avaliar atentimento | Could have |
| c15 | O cliente deve poder Avaliar restaurante | Could have |
| c16 | O cliente deve poder sugerir adições ao cardádio | Could have |
| c17 | O cliente deve poder Visualizar status do pedido(aguardando,processando,feito) | Must have |


## Requisitos elicitados (funcionário)

| ID | Nome | Importância |
| -------- | -------- | -------- |
| f01 |O sistema deve permitir o Cadastro de funcionários | Could Have |
| f02 | O sistema deve permitir Gerar novo QRcode de mesa | Must Have |
| f03 |O sistema deve Informar pedido pronto | Could Have |
| f04 | O sistema deve permitir Fechar mesa | Must Have |
| f05 | O sistema deve permitir Cadastrar cardápio do dia | Could Have |
| f06 | O sistema deve permitir ao funcinário ver se a mesa está livre ou ocupada | Should Have |


## Requisitos elicitados (administrador/gerente)

| ID | Nome | Importância |
| -------- | -------- | -------- |
| a01 |O sistema deve permitir Visualizar Histórico de ações dos funcionários | Could Have |
| a02 |O sistema deve permitir Cadastro de gerentes | Could Have |
| a03 |O sistema deve permitir Visualizar gráficos de consumo | Could Have |
| a04 |O sistema deve permitir Remover Funcionários | Could Have |
| a05 | O sistema deve permitir Cadastrar cardápio geral | Must have |
