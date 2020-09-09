

## Léxicos

## Histórico de versão

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
      <td>07/09/2020</td>
      <td>Caio César Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caiocbeleza</a>)</td>
      <td>Adicionando Documento de Léxico</td>
      <td>
       0.1
      </td>
    </tr>
    <tr>
      <td>08/09/2020</td>
      <td>Caio César Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caiocbeleza</a>)</td>
      <td>Adicionando Léxicos Cancelar pedido e Pedir Conta</td>
      <td>
      0.2  
      </td>
    </tr>
    <tr>
      <td>09/09/2020</td>
      <td>Caio César Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caiocbeleza</a>)</td>
      <td>Adicionando Léxicos Chamar Garçom, Avaliar restaurante e Cliente</td>
      <td>
      0.3  
      </td>
    </tr>
    <tr>
      <td>09/09/2020</td>
      <td>Caio César Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caiocbeleza</a>)</td>
      <td>Adicionando Léxicos Funcionário, mesa livre, mesa ocupada, fazer pagamento e pedidos</td>
      <td>
      0.4  
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
- Rastreabilidade: Link da ideia de onde surgiu a inspiração do termo descrito.
</p>

<p align="justify">&emsp;
Todos os léxicos estão organizados respeitando a seguinte tabela:
</p>

|Número Léxico| Nome do léxico|
|--|--|
|**Classificação**||
|**Noção**   ||
|**Impacto**  ||
|**Sinônimo**||
|**Rastreabilidade**||

### L01
|L01| Ler QRCode|
|--|--|
|**Classificação**| Verbo|
|**Noção**   | - Primeira ação do [Usuário](#L08).<br>- [Usuário](#L08) lê o QRCode de sua mesa com seu dispositivo.<br>- [Usuário](#L08) acessa o sistema QRodízio.|
|**Impacto**  | - O [Usuário](#L08) agora tem acesso às funcionalidades do sistema, como: Ver [cardápio](#L02), [Fazer Pedidos](#L03), Cancelar [Pedidos](#L03), Pedir a [Conta](#L05), Chamar [Garçom](#L09), [Avaliar](#L07) restaurante e [Fazer Pagamento](#L12).|
|**Sinônimo**| Acessar o sistema |
|**Rastreabilidade**||

### L02
|L02| Ver Cardápio|
|--|--|
|**Classificação**|Verbo|
|**Noção**   |- Ação realizada pelo [cliente](#L08) para acessar o [cardápio](#L02) do restaurante.|
|**Impacto**  | - O [cliente](#L08) pode ver quais são os itens oferecidos pelo restaurante;<br>- O [cliente](#L08) pode consultar os preços dos produtos que o restaurante oferece;<br>- O [cliente](#L08) pode escolher o que quer pedir.|
|**Sinônimo**| -Olhar [cardápio](#L02);<br>- Acessar [cardápio](#L02). |
|**Rastreabilidade**||

### L03
|L03 | Fazer Pedidos|
|--|--|
|**Classificação**| Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#L08) de escolher itens no [cardápio](#L02) do restaurante e pedir para que sejam trazidos até sua mesa.|
|**Impacto**  | - Os itens serão adicionado aos [Pedidos](#L13) do [cliente](#L08);<br> - Os valores dos itens serão somados na [Conta](#L05) do [cliente](#L08);<br> - Os itens,depois de preparados, serão levados até à mesa do [cliente](#L08) que os solicitou.|
|**Sinônimo**|Pedir|
|**Rastreabilidade**||

### L04
|L04 | Cancelar Pedidos|
|--|--|
|**Classificação**| Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#L08) de remover um ou mais itens dos [Pedidos](#L13) que fez.|
|**Impacto**  | - Os itens cancelados serão retirados dos [Pedidos](#L13) a serem entregues.<br> - Os valores dos itens retirados serão subtraídos da [Conta](#L05).<br> - Os itens retirados não serão entregues na mesa do [cliente](#L08).|
|**Sinônimo**|Retirar pedido, Remover pedido|
|**Rastreabilidade**||

### L05
|L05 | Pedir a Conta|
|--|--|
|**Classificação**|Verbo |
|**Noção**   | - Ação realizada pelo [cliente](#L08) de encerrar os [Pedidos](#L13) e ter o somatório total dos gastos que fez.|
|**Impacto**  | - A [Conta](#L05) será fechada;<br> - Não serão feitos mais [Pedidos](#L13);<br> - O sistema irá gerar uma lista dos [Pedidos](#L13) e a soma final dos preços desses [Pedidos](#L13).|
|**Sinônimo**|Fechar a [Conta](#L05)|
|**Rastreabilidade**||

### L06
|L06 | Chamar Garçom|
|--|--|
|**Classificação**| Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#L08) de requisitar a presença de um [Garçom](#L09) à sua mesa. |
|**Impacto**  | - Um [Garçom](#L09) vê a solicitação;<br> - O [Garçom](#L09) vai até a mesa onde o [cliente](#L08) está o chamando.|
|**Sinônimo**| - |
|**Rastreabilidade**||

### L07
|L07| Avaliar Restaurante|
|--|--|
|**Classificação**|Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#L08) de dar uma nota pela sua experiência geral com o restaurante. |
|**Impacto**  | - Outras pessoas poderão ver as avaliações feitas sobre o restaurante.|
|**Sinônimo**| - |
|**Rastreabilidade**||

### L08
|L08 | Cliente|
|--|--|
|**Classificação**|Sujeito|
|**Noção**   | - [Usuário](#L08) que utiliza o sistema com a finalidade de usufruir dos serviços oferecidos por um restaurante.|
|**Impacto**  | - O [cliente](#L08) pode Ler o [QRCode](#L01) de sua mesa para acessar o sistema;<br> - Um [cliente](#L08) pode ver o [cardápio](#L02) do restaurante;<br> - O [cliente](#L08) pode [Fazer Pedidos](#L03);<br> - O [cliente](#L08) pode Pedir a Conta;<br> - O [cliente](#L08) pode Chamar um garçoom;<br> - ) cliente pode [Avaliar](#L07) o retaurante;<br> - O cliente pode [Fazer o Pagamento](#L12);<br> - O [cliente](#L08) pode ver a lista de seus [pedidos](#L13).   |
|**Sinônimo**|[Usuário](#L08)|
|**Rastreabilidade**||

### L09
|L09 | Funcionário|
|--|--|
|**Classificação**|Sujeito|
|**Noção**   | - [Usuário](#L08) que vê e administra as solicitações dos [clientes](#L08).|
|**Impacto**  | - Um [Funcionário](#L09) pode ver os [Pedidos](#L03) das mesas as quais está responsável;<br> - Um [Funcionário](#L09) pode ver se uma [mesa está livre](#L10);<br> - Um [Funcionário](#L09) pode ver se uma [mesa está ocupada](#L11);<br> - Um [Funcionário](#L09) pode ver as [chamadas](#L06) de [clientes](#L08).|
|**Sinônimo**|[Garçom](#L09)|
|**Rastreabilidade**||

### L10
|L10| Mesa livre|
|--|--|
|**Classificação**|Estado|
|**Noção**   | - Mesa do restaurante que atualmente não tem nenhum ocupante. |
|**Impacto**  | - A mesa pode ser ocupada por novos [clientes](#L08).|
|**Sinônimo**| -
|**Rastreabilidade**||

### L11
|L11| Mesa ocupada|
|--|--|
|**Classificação**|Estado|
|**Noção**   | - Mesa do restaurante que atualmente está ocupada com [clientes](#L08). |
|**Impacto**  | - A mesa não pode ser oferecida a novos [clientes](#L08) enquanto estiver ocupada.|
|**Sinônimo**| - |
|**Rastreabilidade**||

### L12
|L12| Fazer pagamento|
|--|--|
|**Classificação**|Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#L08) de [pagar](#L12) a [Conta](#L05) dos itens consumidos.|
|**Impacto**  | - A [Conta](#L05) é paga;<br> - A mesa pode ser liberada para outros [clientes](#L08).|
|**Sinônimo**|[pagar](#L12) [Conta](#L05)|
|**Rastreabilidade**||

### L13
|L13|Pedidos|
|--|--|
|**Classificação**|Objeto|
|**Noção**   | - Os itens que foram [pedidos](#L13) pelo cliente.|
|**Impacto**  | - Um [pedido](#L13) pode ser solicitado por [clientes](#L08);<br> - O  [Garçom](#L09) vê o [pedido](#L13) e manda para a cozinha;<br> - A cozinha prepara o [pedido](#L13);<br> - O [Garçom](#L09) leva o [pedido](#L13) até a [mesa](#L11) do [cliente](#L08);<br> -  O [cliente](#L08) pode ver a lista dos [pedidos](#L13) que fez até o momento.|
|**Sinônimo**| - |
|**Rastreabilidade**||
