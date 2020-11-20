## Observer

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
      <td>Adicionando utilização do observer no projeto</td>
      <td>0.1</td>
    </tr>
    <tr>
      <td>26/10/2020</td>
      <td>
        Lucas Midlhey(<a target="blank" href="https://github.com/lucasmidlhey">lucasmidlhey</a>)
      </td>
      <td>Adicionando referencia e aplicabilidade</td>
      <td>0.2</td>
    </tr>
    <tr>
      <td>26/10/2020</td>
      <td>
        Cauê(<a target="blank" href="https://github.com/caue96">caue96</a>)
      </td>
      <td>Incrementando a introdução do que é o padrão observer</td>
      <td>0.3</td>
    </tr>
  </tbody>
</table>

## Introdução

<p align="justify">&emsp;
O Observer é um padrão de projeto comportamental que permite definir um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.
</p>
<p align="justify">&emsp;
O padrão Observer sugere que seja adicionado um mecanismo de assinatura para a classe que notifica outros objetos sobre as mudanças em seu estado, para que objetos individuais possam assinar ou desassinar uma corrente de eventos vindo dessa classe. Esse mecanismo consiste em 2 estapas: 1 - Um vetor para armazenar uma lista de referências aos objetos que querem saber das mudanças do estado da classe notificadora; 2 - Alguns métodos públicos que permitem adicionar os objetos que querem saber das mudanças do estado da classe notificadora e removê-los da lista.
</p>

## Estrutura

![Estrutura observer](../../images/design_patterns/observer.png)

## Aplicações no Projeto(QRodízio)

### Disclaimer

Primeiramente é bom deixar claro que nosso projeto está utilizando de linguagens multi-paradigmas(python e javascript) sendo assim, adaptações aos padrões são necessárias para não fugir do estilo do código utilizado.

A Linguem python possui em seu "zen of python" a seguinte declaração: "Simple is better than complex". Seguindo essa filosifia, decidimos que, se algo pode ser feito em uma função, então será feito em uma função. Assim mantendo um código mais limpo, simples e fácil de manter.

### Utilização

Tinhamos originalmente planejado construir todo um sistema de notificações utilizano a
implementação padrão de um observer(jaka like e etc). Porém como nossa arquitetura é MVC
com a view separada em uma outra aplicação com uma base de código completamente diferente e em outra linguagem. Acabamos por utilizar do socketio para o nosso sistema de notificações.

No socketio, uma conexão é aberta entre o frontend e o backend, em que, eventos são emitidos por ambos os lados e estes podem escutar por esses eventos. O que faz do socketio
uma adaptação do padrão observer que funciona de forma distribuída.

#### exemplo de código

Quando um cliente pede por atendimento:
```javascript
async callForAssistance() {
  let { url } = this.$route.params;
  await this.$socket.emit("call_for_assistance", url);
},
```

A chamada "call_for_assistance" é identificada pelo socketio do backend
```python
@socketio.on("call_for_assistance")
def call_for_assistance(url):
    query = TableSession.query.filter_by(url=url).first()

    if query == None:
        # nofity table
        emit("frontend_employee_called", "Table session not found", json=True)
        return

    emit("frontend_employee_called", "Employee called", json=True)  # nofity table

    emit(  # notify employees
        "frontend_call_for_employee_on_table",
        {"session": query.to_dict()},
        json=True,
        broadcast=True,
    )
```

Por fim o o socketio do backend dispara 2 eventos "frontend_employee_called" e "frontend_call_for_employee_on_table"
o primeiro avisa a mesa que um funcionário foi chamado e o segundo notifica todos os funcionários que uma mesa está solicitando por atendimento.

## Aplicabilidade

- Utilize o padrão Observer quando mudanças no estado de um objeto podem precisar mudar outros objetos, e o atual conjunto de objetos é desconhecido de antemão ou muda dinamicamente.
- O padrão Observer permite que qualquer objeto que implemente a interface do assinante possa se inscrever para notificações de eventos em objetos da publicadora. Você pode adicionar o mecanismo de inscrição em seus botões, permitindo que o cliente coloque seu próprio código através de classes assinantes customizadas.
- Utilize o padrão quando alguns objetos em sua aplicação devem observar outros, mas apenas por um tempo limitado ou em casos específicos.

## Referências

<ul>
<li>
REFACTORING.GURU. Strategy. Disponível em: https://refactoring.guru/pt-br/design-patterns/observer . Acesso em: 26 de outubro. 2020.
</li>
</ul>
