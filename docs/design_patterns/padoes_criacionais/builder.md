## Builder

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
      <td>26/10/2020</td>
      <td>
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)
      </td>
      <td>Adicionando utilização do builder no projeto</td>
      <td>0.1</td>
    </tr>
    <tr>
      <td>26/10/2020</td>
      <td>
        Cauê(<a target="blank" href="https://github.com/caue96">caue96</a>)
      </td>
      <td>Incrementando a introdução do que é o padrão builder</td>
      <td>0.2</td>
    </tr>
    <tr>
      <td>16/11/2020</td>
      <td>
        Lucas(<a target="blank" href="https://github.com/lucasmidlhey">lucasmidlhey</a>)
      </td>
      <td>Justificativa</td>
      <td>0.3</td>
    </tr>
  </tbody>
</table>

## Introdução

<p align="justify">&emsp;
O Builder é um padrão de criacional que permite construir objetos complexos. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção.
</p>
<p align="justify">&emsp;
O padrão Builder sugere que se extraia o código de construção do objeto para fora de sua própria classe e mova ele para objetos separados chamados construtores ou builders. 
</p>

## Estrutura

![Estrutura Strategy](../../images/design_patterns/builder.png)

## Aplicações no Projeto(QRodízio)

### Disclaimer

Primeiramente é bom deixar claro que nosso projeto está utilizando de linguagens multi-paradigmas(python e javascript) sendo assim, adaptações aos padrões são necessárias para não fugir do estilo do código utilizado.

A Linguem python possui em seu "zen of python" a seguinte declaração: "Simple is better than complex". Seguindo essa filosifia, decidimos que, se algo pode ser feito em uma função, então será feito em uma função. Assim mantendo um código mais limpo, simples e fácil de manter.

### Utilização

Em nossa base de código percemos que a API estava tendo muito código repetido e verboso para instancia os models, sendo assim optamos em exportar essa instanciação mais verbosa para builders para cada model.

Uma vantagem é que esses mesmos builders acabaram por ser utilizado tanto nos comandos de ternimal quanto nos testes unitários.

Segue um exemplo de um de nossos [builders](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/develop/qrodizio/builders.py):

```python
def customer_tables_builder(**customer_table_atrrs):
    customer_table = CustomerTable()

    sessions_data = customer_table_atrrs["sessions"]
    del customer_table_atrrs["sessions"]

    for session_data in sessions_data:
        session = TableSession()

        for key in session_data.keys():
            setattr(session, key, session_data[key])

        customer_table.sessions.append(session)

    for key in customer_table_atrrs.keys():
        setattr(customer_table, key, customer_table_atrrs[key])

    return customer_table

def employee_builder(**employee_attrs):
  ...

def menus_builder(**menu_attrs):
  ...

def demand_builder(**demand_attrs):
  ...
```

## Justificativa

Utilizar esse padrão foi de suma importancia para popular o banco de dados, tendo apenas um trabalho no inicio que foi de criar este padrão e depois para qualquer novo teste com as models foi bem mais simples em nível de código.

## Referências

<ul>
<li>
REFACTORING.GURU. Strategy. Disponível em: https://refactoring.guru/pt-br/design-patterns/builder . Acesso em: 26 de outubro. 2020.
</li>
</ul>
