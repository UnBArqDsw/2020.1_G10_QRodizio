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
| s01 | O sistema deve Gerar QRCode | Must have |
| s02 | O sistema deve gerar uma nova URL da mesa para cada sessão aberta | Should have |
| s03 | O sistema deve ter Papéis de acesso (Administrador/Gerente, Garçom/Funcionário, Cliente) | Could Have |
| s04 | Gerar gráficos(consumo,mais pedidos, etc) | Could have |
| s05 | Gerar estatisticas | Could have |


## Requisitos elicitados (cliente)

| ID | Nome | Importância |
| -------- | -------- | -------- |
| c01 | O cliente deve poder acessar o cardádio | Must have |
| c02 | O cliente deve poder Realizar pedidos | Must have |
| c03 | O cliente deve poder Cancelar pedidos | Could have |
| c04 | O cliente deve poder Alterar pedidos | Could have |
| c05 | O cliente deve poder Visualizar pedidos | Must Have |
| c06 | O cliente deve poder Abrir mesa | Must Have |
| c07 | O cliente deve poder Cadastrar forma de pagamento | Must Have |
| c08 | O cliente deve poder Chamar garçom | Must Have |
| c09 | O cliente deve poder Alterar forma de pagamento | Could have |
| c10 | O cliente deve poder Dividir pagamento | Could Have |
| c11 | O cliente deve poder Visualizar pagamento total(da mesa) | Must have |
| c12 | O cliente deve poder Visualizar pagamento parcial(só do cliente) | Could Have |
| c13 | O cliente deve poder Avaliar atentimento | Could have |
| c14 | O cliente deve poder Avaliar restaurante | Could have |
| c15 | O cliente deve poder sugerir adições ao cardádio | Could have |
| c16 | O cliente deve poder Visualizar status do pedido(aguardando,processando,feito) | Must have |


## Requisitos elicitados (funcionário)

| ID | Nome | Importância |
| -------- | -------- | -------- |
| f01 | Cadastro de funcionários | Could Have |
| f02 | Gerar novo QRcode de mesa | Must Have |
| f03 | Informar pedido pronto | Could Have |
| f04 | Fechar mesa | Must Have |
| f05 | Cadastrar cardápio do dia | Could Have |


## Requisitos elicitados (administrador/gerente)

| ID | Nome | Importância |
| -------- | -------- | -------- |
| a01 | Visualizar Histórico de ações dos funcionários | Could Have |
| a02 | Cadastro de gerentes | Could Have |
| a03 | Visualizar gráficos de consumo | Could Have |
| a04 | Remover Funcionários | Could Have |
| a05 | Cadastrar cardápio geral | Must have |
