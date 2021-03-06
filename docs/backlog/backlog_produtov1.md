# Backlog do produto

## Histórico de versões

<table>
  <thead>
    <tr>
      <th>Data</th>
      <th>Autor(es)</th>
      <th>Descrição</th>
      <th>Versão</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>11/09/2020</td>
      <td>
        Lucas Midlhey(<a target="blank" href="https://github.com/lucasmidlhey">Lucas Midlhey</a>)
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>),
        Caio Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caio Beleza</a>),
        João Pedro(<a target="blank" href="https://github.com/lucasmidlhey">João Pedro</a>),
        Cauê Mateus(<a target="blank" href="https://github.com/lucasmidlhey">Cauê</a>)
      </td>
      <td>Criação do documento</td>
      <td>0.1</td>
    </tr>
    <tr>
      <td>23/09/2020</td>
      <td>
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)
      </td>
      <td>
        * Remove alterar pedido. <br />
        * Altera <i>Cadastrar forma de pagamento</i> para <i>Escolher forma de pagamento</i><br />
        * Adiciona f07: notificar funcionário sobre pedidos<br />
        * Adiciona f08: alterar dados dos funcionários<br />
        * Adiciona a06: alterar papél dos funcionários
      </td>
      <td>0.2</td>
    </tr>
  </tbody>
</table>


## Introdução

Este documento tem como objetivo trazer as principais funcionalidades que foram analisadas pela equipe afim de priorizar e implantar em cada sprint do ciclo de desenvolvimento.
Fizemos um branstorming utilizando a ferramenta de edição online [hackMD](hackmd.io) e o [hangouts](https://hangouts.google.com/) do google, onde foram respondidas as seguintes perguntas:

- 1. O que o cliente deve poder fazer no sistema?
- 2. Quais seriam as features disponíveis para o restaurante?
- 3. O que as pessoas com privilégio de admin vão poder fazer?


## Requisitos elicitados (sistema)
| ID | Nome | Importância |
| -------- | -------- | -------- |
| S01 | O sistema deve Gerar QRCode | Must have |
| s02 | O sistema deve gerar uma nova URL da mesa para cada sessão aberta | Should have |
| s03 | O sistema deve ter Papéis de acesso (Administrador/Gerente, Garçom/Funcionário, Cliente) | Could Have |
| s04 | O sistema deve poder Gerar gráficos(consumo,mais pedidos, etc) | Could have |
| s05 | Gerar estatísticas | Could have |


## Requisitos elicitados (cliente)

| ID | Nome | Importância |
| -------- | -------- | -------- |
| c01 | O cliente deve poder Ler QRCode | Must have |
| c02 | O cliente deve poder acessar o cardápio | Must have |
| c03 | O cliente deve poder Realizar pedidos | Must have |
| c04 | O cliente deve poder Cancelar pedidos | Could have |
| c05 | O cliente deve poder Visualizar pedidos | Must Have |
| c06 | O cliente deve poder Abrir mesa | Must Have |
| c07 | O cliente deve poder Escolher forma de pagamento | Must Have |
| c08 | O cliente deve poder Chamar garçom | Must Have |
| c09 | O cliente deve poder Alterar forma de pagamento | Could have |
| c10 | O cliente deve poder Dividir pagamento | Could Have |
| c11 | O cliente deve poder Visualizar pagamento total(da mesa) | Must have |
| c12 | O cliente deve poder Visualizar pagamento parcial(só do cliente) | Could Have |
| c13 | O cliente deve poder Avaliar atendimento | Could have |
| c14 | O cliente deve poder Avaliar restaurante | Could have |
| c15 | O cliente deve poder sugerir adições ao cardápio | Could have |
| c16 | O cliente deve poder Visualizar status do pedido(aguardando,processando,feito) | Must have |


## Requisitos elicitados (funcionário)

| ID | Nome | Importância |
| -------- | -------- | -------- |
| f01 | O sistema deve permitir o Cadastro de funcionários | Could Have |
| f02 | O sistema deve permitir Gerar novo QRcode para a mesa | Must Have |
| f03 | O sistema deve Informar pedido pronto | Could Have |
| f04 | O sistema deve permitir Fechar mesa | Must Have |
| f05 | O sistema deve permitir Cadastrar cardápio do dia | Could Have |
| f06 | O sistema deve permitir ao funcionário ver se a mesa está livre ou ocupada | Should Have |
| f07 | O sistema deve notificar ao funcionário sobre novos pedidos | must Have |
| f08 | O sistema deve permitir ao funcionário alterar seus dados | must Have |


## Requisitos elicitados (administrador/gerente)

| ID | Nome | Importância |
| -------- | -------- | -------- |
| a01 | O sistema deve permitir Visualizar Histórico de ações dos funcionários | Could Have |
| a02 | O sistema deve permitir Cadastro de gerentes | Could Have |
| a03 | O sistema deve permitir Visualizar gráficos de consumo | Could Have |
| a04 | O sistema deve permitir Remover Funcionários | Could Have |
| a05 | O sistema deve permitir Cadastrar cardápio geral | Must have |
| a06 | O sistema deve permitir Alterar papel de funcionário | Should have |
