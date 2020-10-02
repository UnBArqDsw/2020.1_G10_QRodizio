# Documento de Arquitetura

## Histórico de Revisão

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
      <td>02/10/20</td>
      <td>
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)
      </td>
      <td>Criação do documento</td>
      <td>0.1</td>
    </tr>
  </tbody>
</table>


## 1. Introdução

### 1.1 Finalidade
Este documento tem como objetivo esboçar uma visão ampla da arquitetura do QRodízio e informando as decisões significativas que foram tomadas em relação ao sistema do ponto de vista do arquiteto.

### 1.2 Escopo
O QRodízio visa ser uma ferramenta que auxilia no gerenciamento de mesas de rodízio e acesso a pedidos. 

### 1.3 Definições, Acrônimos e Abreviações

### 1.4 Referências
- What is Vue.js? Em: vuejs.org. Disponível em: [https://vuejs.org/v2/guide/](https://vuejs.org/v2/guide/). Acesso em: 2 de outubro de 2020.
- Flask (framework web). In: WIKIPÉDIA: a enciclopédia livre. Disponível em: [https://pt.wikipedia.org/wiki/Flask_(framework_web)](https://pt.wikipedia.org/wiki/Flask_(framework_web)). Acesso em: 2 de outubro de 2020.
- Socket.IO. Em: WIKIPÉDIA: a enciclopédia livre. Disponível em: [https://en.wikipedia.org/wiki/Socket.IO)](https://en.wikipedia.org/wiki/Socket.IO). Acesso em: 2 de outubro de 2020.
- O que é Vuex? Em: vuex.vuejs.org. Disponível em: [https://vuex.vuejs.org/ptbr/](https://vuex.vuejs.org/ptbr/). Acesso em: 2 de outubro de 2020.

## 2. Representação da Arquitetura

### 2.1 Tecnologias utilizadas

#### Vuejs
Web framework progressivo para construção de interfaces de usuário. Vue foi desenhado para ser de fácil utilização e incrementalmente adicionável a qualquer projeto. O foco do Vue está na camada de visualização e criação de single page applications.

#### Flask
Flask é um pequeno framework web escrito em Python e baseado na biblioteca WSGI Werkzeug e na biblioteca de Jinja2. Flask está disponível sob os termos da Licença BSD. 

#### Socket.IO
Socket.IO é uma biblioteca JavaScript para aplicativos da web em tempo real. Permite comunicação bidirecional em tempo real entre clientes e servidores da Web. Ele tem duas partes: uma biblioteca do lado do cliente que é executada no navegador e uma biblioteca do lado do servidor para o Node.js.

#### Vuex
O Vuex é um padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js. Ele serve como um store centralizado para todos os componentes em uma aplicação, com regras garantindo que o estado só possa ser mutado de forma previsível.

### 2.1 Representação arquitetural
#### Visão geral

[![visão geral](../docs/images/arquitetura/visao-geral.jpg)](https://ibb.co/G2cwnmx)

#### Vuex

[![Vuex](https://vuex.vuejs.org/vuex.png)](https://vuex.vuejs.org/vuex.png)

## 3. Metas e Restrições de Arquitetura

A aplicação deverá ser suportada pelos navegadores, Mozilla Firefox, Google Chrome e Microsoft Edge. Toda parte do frontend será construída utilizando Vuejs, biblioteca de JavaScript para criar interfaces para o usuário, juntamente com Vuex para o gerenciamento de stado da aplicação pelo lado do usuário. A aplicação também utilizará do microframework Flask, que é construído em python e que juntamente com a biblioteca Socket.IO/Flask-Socket.IO fará a comunicação em tempo real entre usuário e servidor.

Para facilitar no desenvolvimento a ferramenta Docker será utilizada garantindo que todos no desenvolvimento estão utilizando o mesmo ambiente e configurações.
