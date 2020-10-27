## State
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
      <td>Adicionando padrão state </td>
      <td>0.1</td>
    </tr>
  </tbody>
</table>

## Introdução

<p align="justify">&emsp;
O State é um padrão de projeto comportamental que permite que um objeto altere seu comportamento quando seu estado interno muda.
</p>
<p align="justify">&emsp;
O padrão State sugere que você crie novas classes para todos os estados possíveis de um objeto e extraia todos os comportamentos específicos de estados para dentro dessas classes.


</p>

## Estrutura
![Estrutura State](../../images/design_patterns/StateStructure.png)

A interface State é encapsulada em uma classe e espelha a interface dessa classe, com excessão de um parâmetro adicional, que permite às classes derivadas chamarem à classe na qual estão envolvidas.


## Aplicações no Projeto(QRodízio)

### Trecho do código

```
export default createStore({
  state: {
    userToken: ""
  },
  mutations: {
    logUserIn(state, token) {
      state.userToken = token;
      localStorage.setItem("userToken", token);
    },

    logUserOut(state) {
      state.userToken = "";
      localStorage.setItem("userToken", "");
    }
  },

```
Este trecho de código pode ser encontrado no repositório do frontend do projeto QRodízio, no seguinte [arquivo](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Frontend/blob/user-auth/src/store/index.js).

<p align="justify">&emsp;
O trecho de código acima descreve um padrão state utilizado no projeto(QRodízio), onde cada mutação representa o estado de logado ou deslogado do usuário, verficando se o token desse usuário está ou não ativo.
</p>

### Modelagem

![Estrutura Strategy](../../images/design_patterns/modelagemState.png)

<p align="justify">&emsp;
Algumas das facilidades que esse padrão ofereceu ao projeto foram: - Introduzir os estados sem a necessidade de mudar classes; - Código mais organizado onde é necessária a utilização dos estados definidos.
</p>


## Referências
<ul>
<li>
REFACTORING.GURU. State. Disponível em: https://refactoring.guru/pt-br/design-patterns/state . Acesso em: 26 de outubro. 2020.
</li>
<li>
SOURCEMAKING. Design Patters. https://sourcemaking.com/design_patterns . Acesso em: 26 de outubro. 2020.
</li>
</ul>
