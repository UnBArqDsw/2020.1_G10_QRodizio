## GRASPS

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
        Caio César Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caiocbeleza</a>)
      </td>
      <td>Adicionando introdução GRASPS </td>
      <td>0.1</td>
    </tr>
    <tr>
      <td>26/10/2020</td>
      <td>
        Cauê(<a target="blank" href="https://github.com/caue96">caue96</a>)
      </td>
      <td>Adicionando pontos do código de aplicação dos padrões GRASP(s)</td>
      <td>0.2</td>
    </tr>
    <tr>
      <td>15/11/2020</td>
      <td>
        Cauê(<a target="blank" href="https://github.com/lucasmidlhey">lucasmidlhey</a>)
      </td>
      <td>justificativas e reflexoes do grupo</td>
      <td>0.3</td>
    </tr>
  </tbody>
</table>

---

## Introdução

<p align="justify">&emsp;
Os padrões GRASPS foram criados com o intuito de  tornar o código mais flexível, facilitando a manutenção e a extensibilidade.
</p>
<p align="justify">&emsp;
A sigla GRASPS vem de "General Responsibility Assignment Software Patterns", eles consistem em uma série de princípios baseados em conceitos para atribuição de responsabilidades a classes e objetos na construção de bons softwares usando programação orientada a objetos.
</p>

### GRASPS aplicados no projeto (QRodízio)

- Information Expert(Especialista de informação): Determina quando devemos delegar a responsabilidade para um outro objeto que seja especialista naquele domínio.<br>
  - A classe [Menu](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/menus.py) é especialista da classe [Item](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/menus.py);
  - A classe [TableSession](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/tables.py) é especialista da classe "Conta", classe essa que ainda não foi implementada;
  - A classe "Conta", que ainda não foi implementada, é especialista da classe [Demand](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/demands.py).

De forma muito simples nos implementamos o modelo de especialista sem um conhecimento profunda e quando estudado sobre foi percebemos as vantagens em utilizar, tais como, conhecer as responsabilidades por objetos, metodos e campos cumputados.

- Creator(Criador): Determina qual classe deve ser responsável pela criação certos objetos.
  - A classe [User](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/users.py) é criadora da classe [Payment](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/payments.py)

A criação de objetos por outra classe é a forma mais clara de orientação a objetos, devido a isso pudemos evidenciar neste Criador que as instancias em Payment contem, agregam e as instancias de User, provando o uso do GRASP criador.

- Polimorfism(Polimorfismo): As responsabilidades devem ser atribuídas a abstrações e não a objetos concretos, permitindo que eles possam variar conforme a necessidade.
  - A função de notificação, ainda não implementada, utilizará do polimorfismos para envio de mensagens tanto para usuários quanto para funcionários que irá variar de acordo com o que se deseja. Exemplo: a mesma função retornará mensagens diferentes para quando o usuário fizer um pedido, para quando um usuário fechar a conta, para quando o usuário pagar a conta, etc, sempre mostrando diferentes mensagens a depender de onde a requisição venha.

Analisando a função do polimorfismo é possível perceber o quanto é necessário para um software que possui inúmeras rotas e classes, podendo criar apenas um objeto mudando seu paramento analisando sua necessidade, fizemos disso um padrão mais utilizado em nosso sistema.

## Referências

<ul>
<li>
MEDIUM. Padrões GRASP — Padrões de Atribuir Responsabilidades. Disponível em: https://medium.com/@leandrovboas/padr%C3%B5es-grasp-padr%C3%B5es-de-atribuir-responsabilidades-1ae4351eb204 . Acesso em: 26 de outubro. 2020.
</li>
<li>
DEVMEDIA. Desenvolvimento com qualidade com GRASP. https://www.devmedia.com.br/desenvolvimento-com-qualidade-com-grasp/28704 . Acesso em: 26 de outubro. 2020.
</li>
</ul>
