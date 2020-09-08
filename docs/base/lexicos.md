## Léxicos

## Histórico de Revisões

<table>
  <thead>
    <tr>
      <th>Data</th>
      <th>Versão</th>
      <th>Descrição</th>
      <th>Autor(es)</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>07/09/2020</td>
      <td>0.1</td>
      <td>Adicionando Documento de Léxico</td>
      <td>
        Caio César Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caiocbeleza</a>)
      </td>
    </tr>
    <tr>
      <td>08/09/2020</td>
      <td>0.2</td>
      <td>Adicionando Léxicos Cancelar pedido e Pedir Conta</td>
      <td>
        Caio César Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caiocbeleza</a>)
      </td>
    </tr>


  </tbody>
</table>

<p align="justify">&emsp;
Cada léxico(termo) feito é estruturado segundo as seguintes definições:<br>

- Número identificador do termo;
- Nome do termo;
- Classificação:
- Noção: Significado e contexto do termo;
- Impacto: Quais são os impactos referentes ao acontecimento do termo;
- Sinônimos: Termos que tem o mesmo significado no projeto;
- Rastreabilidade: Link da ideia de onde surgiu a inspiração do termo descrito.<br>
</p>

<p align="justify">&emsp;
Todos os léxicos estão organizados respeitando a seguinte tabela:
</p>


|Número Léxico| Nome do léxico|
|----|----|
|**Classificação**||
|**Noção**   ||
|**Impacto**  ||
|**Sinônimo**||
|**Rastreabilidade**||

### L01
|L01| Ler QRCode|
|----|----|
|**Classificação**| Verbo|
|**Noção**   | - Primeira ação do [Usuário](#L08).<br>- [Usuário](#L08) lê o QRCode de sua mesa com seu dispositivo.<br>- [Usuário](#L08) acessa o sistema QRodízio.|
|**Impacto**  | - O [Usuário](#L08) agora tem acesso às funcionalidades do sistema, como: Ver [cardápio](#L02), Fazer [Pedidos](#L03), Cancelar [Pedidos](#L03), Pedir a [Conta](#L05), Chamar [Garçom](#L09), [Avaliar](#L07) restaurante e [Fazer Pagamento](#L12).|
|**Sinônimo**| Acessar o sistema |
|**Rastreabilidade**||

### L02
|L02| Ver Cardápio|
|----|----|
|**Classificação**|Verbo|
|**Noção**   |- Ação realizada pelo [cliente](#L08) para acessar o [cardápio](#L02) do restaurante.|
|**Impacto**  | - O [cliente](#L08) pode ver quais são os itens oferecidos pelo restaurante;<br>- O [cliente](#L08) pode consultar os preços dos produtos que o restaurante oferece;<br>- O [cliente](#L08) pode escolher o que quer pedir.|
|**Sinônimo**| -Olhar [cardápio](#L02);<br>- Acessar [cardápio](#L02). |
|**Rastreabilidade**||

### L03
|L03 | Fazer Pedidos|
|----|----|
|**Classificação**| Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#L08) de escolher itens no [cardápio](#L02) do restaurante e pedir para que sejam trazidos até sua mesa.|
|**Impacto**  | - Os itens serão adicionado aos [Pedidos](#L03) do [cliente](#L08);<br> - Os valores dos itens serão somados na [Conta](#L05) do [cliente](#L08);<br> - Os itens,depois de preparados, serão levados até à mesa do [cliente](#L08) que os solicitou.|
|**Sinônimo**|Pedir|
|**Rastreabilidade**||

### L04
|L04 | Cancelar Pedidos|
|----|----|
|**Classificação**| Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#L08) de remover um ou mais itens dos [Pedidos](#L03) que fez.|
|**Impacto**  | - Os itens cancelados serão retirados dos [Pedidos](#L03) a serem entregues.<br> - Os valores dos itens retirados serão subtraídos da [Conta](#L05).<br> - Os itens retirados não serão entregues na mesa do [cliente](#L08).|
|**Sinônimo**|Retirar pedido, Remover pedido|
|**Rastreabilidade**||

### L05
|L05 | Pedir a Conta|
|----|----|
|**Classificação**|Verbo |
|**Noção**   | - Ação realizada pelo [cliente](#L08) de encerrar os [Pedidos](#L03) e ter o somatório total dos gastos que fez.|
|**Impacto**  | - A [Conta](#L05) será fechada;<br> - Não serão feitos mais [Pedidos](#L03);<br> - O sistema irá gerar uma lista dos [Pedidos](#L03) e a soma final dos preços desses [Pedidos](#L03).|
|**Sinônimo**|Fechar a [Conta](#L05)|
|**Rastreabilidade**||
