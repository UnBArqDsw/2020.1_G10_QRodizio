# Diagrama de sequência

## Histórico de Versão

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
      <td>25/09/2020</td>
      <td>
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)
      </td>
      <td>Criação do documento</td>
      <td>0.1</td>
    </tr>
    <tr>
      <td>27/09/2020</td>
      <td>
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)
      </td>
      <td>Atualiza diagrama feat 01 para versão 03 do diagrama de classes</td>
      <td>0.2</td>
    </tr>
    <tr>
      <td>28/09/2020</td>
      <td>
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)
      </td>
      <td>
        1. Adiciona diagrama feat 04:</br>
           &nbsp;&nbsp;&nbsp;&nbsp;- Employee, creates daily menu<br />
           &nbsp;&nbsp;&nbsp;&nbsp;- Customer, read menu<br />
        2. Adiciona diagrama feat 05: Customer, calls employee<br/>
        3. Adiciona diagrama feat 06: notify request status
      </td>
      <td>0.3</td>
    </tr>
  </tbody>
</table>

## Introdução

Diagramas de sequência referentes as features do [backlog](../../backlog/backlog_produtov2.md)

## Diagramas

### Feat 01: QR Code

#### Employee, generates QR Code

[![DiaSeqFeat01](../../images/UML/DiaSeq/DiaSeqFeat01_1.jpeg)](https://ibb.co/HB1X526)

#### Customer, read QR Code

[![DiaSeqFeat01](../../images/UML/DiaSeq/DiaSeqFeat01_2.jpeg)](https://ibb.co/rMbhLG8)

#### Versões anteriores

- [Versão 01](https://ibb.co/j8cg9tn)

### Feat 04:  Manter cardápio

#### Employee, creates daily menu

[![DiaSeqFeat04_1](../../images/UML/DiaSeq/DiaSeqFeat04_1.jpg)](https://ibb.co/vqhH8NC)

#### Customer, read menu

[![DiaSeqFeat04_2](../../images/UML/DiaSeq/DiaSeqFeat04_2.jpg)](https://ibb.co/VVJhTNL)

#### Observações

- Só pode haver um cardaṕio do dia, logo quando um novo é criado, o anterior é deletado.
- <strong>TODO:</strong> É um manter, então tem que modelar o resto do CRUD. <small>É um crud... preciso mesmo modelar ele todo? 😭...é um CRUD...UM CRUD !!!😑</small>

### Feat 05: Manter mesa

#### Customer, calls employee

[![DiaSeqFeat05_1](../../images/UML/DiaSeq/DiaSeqFeat05_1.jpg)](https://ibb.co/qgjBLrh)

1. Cliente chama funcionário WebApp 
2. A controladora CustomerController passa uma EmployeeCallNotification para a sua ActionCaller
3. ActionCaller notifica a classe Employee
4. Classe Employee chama pela EmployeeController para exibir a notificação nos funcionários.
5. Funcionários são notificados

### Feat 06: Manter pedido

#### notify request status

[![DiaSeqFeat06_1](../../images/UML/DiaSeq/DiaSeqFeat06_1.jpg)](https://ibb.co/G0ywJVm)

1. Funcionário muda o status de um pedido 
2. setStatus() da classe Request passa uma RequestStatusChangeNotification para a sua ActionCaller
3. ActionCaller notifica a classe Table
4. Classe Table chama pela TableController para exibir a mudança do status do pedido
5. Cliente ve a mudança no status
