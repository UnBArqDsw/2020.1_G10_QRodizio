
# Léxicos

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
    <tr>
      <td>10/09/2020</td>
      <td>Lucas Midlhey(<a target="blank" href="https://github.com/lucasmidlhey">Lucasmidlhey</a>)</td>
      <td>Adicionando Léxicos Internet, localização e smarthpone</td>
      <td>
      0.5
      </td>
    </tr>
    <tr>
      <td>10/09/2020</td>
      <td>Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)</td>
      <td>Adicionando Léxicos Status pedido(L17), Alterar pedido(L18)</td>
      <td>
      0.6
      </td>
    </tr>
    <tr>
      <td>11/09/2020</td>
      <td>Cauê Mateus Oliveira(<a target="blank" href="https://github.com/caue96">caue96</a>)</td>
      <td>Adicionando Léxicos Gerente(L19), Cardápio(L20), </td>
      <td>
      0.7
      </td>
    </tr>
    <tr>
      <td>11/09/2020</td>
      <td>Caio César Beleza(<a target="blank" href="https://github.com/Caiocbeleza">Caiocbeleza</a>)</td>
      <td>Adicionando rastrabilidade dos léxicos</td>
      <td>
      0.8
      </td>
    </tr>
    <tr>
      <td>02/10/2020</td>
      <td>Lucas Midlhey(<a target="blank" href="https://github.com/lucasmidlhey">Lucasmidlhey</a>)</td>
      <td>Revendo lexicos L17,L18, L24, L25 </td>
      <td>
      1.0
      </td>
    </tr>
  </tbody>
</table>

## Definições

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

A rastreabilidade ainda não foi colocada nos léxicos abaixo devido a ainda não termos aberto todas as issues de desenvolvimento do projeto, com isso esse documento será incremental, ou seja, conforme formos abrindo as issues relacionadas a ela vamos colocando a rastreabilidade delas aqui e também os termos importantes a medida com que forem surgindo serão acoplados ao final desse documento.

## L01 - Ler QRCode
|L01| Ler QRCode|
|--|--|
|**Classificação**| Verbo|
|**Noção**   | - Primeira ação do [Usuário](#l08-cliente).<br>- [Usuário](#l08-cliente) lê o QRCode de sua mesa com seu dispositivo.<br>- [Usuário](#l08-cliente) acessa o sistema QRodízio.|
|**Impacto**  | - O [Usuário](#l08-cliente) agora tem acesso às funcionalidades do sistema, como: Ver [cardápio](#l02-ver-cardapio), [Fazer Pedidos](#l03-fazer-pedidos), Cancelar [Pedidos](#l03-fazer-pedidos), Pedir a [Conta](#l05-pedir-a-conta), Chamar [Garçom](#l09-funcionario), [Avaliar](#l07-avaliar-restaurante) restaurante e [Fazer Pagamento](#l12-fazer-pagamento).|
|**Sinônimo**| Acessar o sistema |
|**Rastreabilidade**|c01, [S01](#s01), f02|

## L02 - Ver Cardápio
|L02| Ver Cardápio|
|--|--|
|**Classificação**|Verbo|
|**Noção**   |- Ação realizada pelo [cliente](#l08-cliente) para acessar o [cardápio](#l02-ver-cardapio) do restaurante.|
|**Impacto**  | - O [cliente](#l08-cliente) pode ver quais são os itens oferecidos pelo restaurante;<br>- O [cliente](#l08-cliente) pode consultar os preços dos produtos que o restaurante oferece;<br>- O [cliente](#l08-cliente) pode escolher o que quer pedir.|
|**Sinônimo**| -Olhar [cardápio](#l02-ver-cardapio);<br>- Acessar [cardápio](#l02-ver-cardapio). |
|**Rastreabilidade**|c02|

## L03 - Fazer Pedidos
| L03 | Fazer Pedidos|
|--|--|
|**Classificação**| Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#l08-cliente) de escolher itens no [cardápio](#l02-ver-cardapio) do restaurante e pedir para que sejam trazidos até sua mesa.|
|**Impacto**  | - Os itens serão adicionado aos [Pedidos](#l13-pedidos) do [cliente](#l08-cliente);<br> - Os valores dos itens serão somados na [Conta](#l05-pedir-a-conta) do [cliente](#l08-cliente);<br> - Os itens,depois de preparados, serão levados até à mesa do [cliente](#l08-cliente) que os solicitou.|
|**Sinônimo**|Pedir|
|**Rastreabilidade**|c03|

## L04 - Cancelar Pedidos
|L04 | Cancelar Pedidos|
|--|--|
|**Classificação**| Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#l08-cliente) de remover um ou mais itens dos [Pedidos](#l13-pedidos) que fez.|
|**Impacto**  | - Os itens cancelados serão retirados dos [Pedidos](#l13-pedidos) a serem entregues.<br> - Os valores dos itens retirados serão subtraídos da [Conta](#l05-pedir-a-conta).<br> - Os itens retirados não serão entregues na mesa do [cliente](#l08-cliente).|
|**Sinônimo**|Retirar pedido, Remover pedido|
|**Rastreabilidade**|c04|

## L05 - Pedir a Conta
| L05 | Pedir a Conta|
|--|--|
|**Classificação**|Verbo |
|**Noção**   | - Ação realizada pelo [cliente](#l08-cliente) de encerrar os [Pedidos](#l13-pedidos) e ter o somatório total dos gastos que fez.|
|**Impacto**  | - A [Conta](#l05-pedir-a-conta) será fechada;<br> - Não serão feitos mais [Pedidos](#l13-pedidos);<br> - O sistema irá gerar uma lista dos [Pedidos](#l13-pedidos) e a soma final dos preços desses [Pedidos](#l13-pedidos).|
|**Sinônimo**|Fechar a [Conta](#l05-pedir-a-conta)|
|**Rastreabilidade**|c12, c13|

## L06 - Chamar Garçom
| L06 | Chamar Garçom|
|--|--|
|**Classificação**| Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#l08-cliente) de requisitar a presença de um [Garçom](#l09-funcionario) à sua mesa. |
|**Impacto**  | - Um [Garçom](#l09-funcionario) vê a solicitação;<br> - O [Garçom](#l09-funcionario) vai até a mesa onde o [cliente](#l08-cliente) está o chamando.|
|**Sinônimo**| - |
|**Rastreabilidade**|c09|

## L07 - Avaliar Restaurante
| L07 | Avaliar Restaurante|
|--|--|
|**Classificação**|Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#l08-cliente) de dar uma nota pela sua experiência geral com o restaurante. |
|**Impacto**  | - Outras pessoas poderão ver as avaliações feitas sobre o restaurante.|
|**Sinônimo**| - |
|**Rastreabilidade**|c14,c15|

## L08 - Cliente
| L08 | Cliente|
|--|--|
|**Classificação**|Sujeito|
|**Noção**   | - [Usuário](#l08-cliente) que utiliza o sistema com a finalidade de usufruir dos serviços oferecidos por um restaurante.|
|**Impacto**  | - O [cliente](#l08-cliente) pode Ler o [QRCode](#l01-ler-qrcode) de sua mesa para acessar o sistema;<br> - Um [cliente](#l08-cliente) pode ver o [cardápio](#l02-ver-cardapio) do restaurante;<br> - O [cliente](#l08-cliente) pode [Fazer Pedidos](#l03-fazer-pedidos);<br> - O [cliente](#l08-cliente) pode Pedir a Conta;<br> - O [cliente](#l08-cliente) pode Chamar um [garçom](#l09-funcionario);<br> - O cliente pode [Avaliar](#l07-avaliar-restaurante) o retaurante;<br> - O cliente pode [Fazer o Pagamento](#l12-fazer-pagamento);<br> - O [cliente](#l08-cliente) pode ver a lista de seus [pedidos](#l13-pedidos).   |
|**Sinônimo**|[Usuário](#l08-cliente)|
|**Rastreabilidade**|c01-c17|

## L09 - Funcionário
| L09 | Funcionário|
|--|--|
|**Classificação**|Sujeito|
|**Noção**   | - [Usuário](#l08-cliente) que vê e administra as solicitações dos [clientes](#l08-cliente).|
|**Impacto**  | - Um [Funcionário](#l09-funcionario) pode ver os [Pedidos](#l03-fazer-pedidos) das mesas as quais está responsável;<br> - Um [Funcionário](#l09-funcionario) pode ver se uma [mesa está livre](#l10-mesa-livre);<br> - Um [Funcionário](#l09-funcionario) pode ver se uma [mesa está ocupada](#l11-mesa-ocupada);<br> - Um [Funcionário](#l09-funcionario) pode ver as [chamadas](#l06-chamar-garcom) de [clientes](#l08-cliente).|
|**Sinônimo**|[Garçom](#l09-funcionario)|
|**Rastreabilidade**|f01, a04|

## L10 - Mesa livre
|L10| Mesa livre|
|--|--|
|**Classificação**|Estado|
|**Noção**   | - Mesa do restaurante que atualmente não tem nenhum ocupante. |
|**Impacto**  | - A mesa pode ser ocupada por novos [clientes](#l08-cliente).|
|**Sinônimo**| -
|**Rastreabilidade**|s02, f02, f06|

## L11 - Mesa ocupada
|L11| Mesa ocupada|
|--|--|
|**Classificação**|Estado|
|**Noção**   | - Mesa do restaurante que atualmente está ocupada com [clientes](#l08-cliente). |
|**Impacto**  | - A mesa não pode ser oferecida a novos [clientes](#l08-cliente) enquanto estiver ocupada.|
|**Sinônimo**| - |
|**Rastreabilidade**|f04, f06|

## L12 - Fazer pagamento
|L12| Fazer pagamento|
|--|--|
|**Classificação**|Verbo|
|**Noção**   | - Ação realizada pelo [cliente](#l08-cliente) de [pagar](#l12-fazer-pagamento) a [Conta](#l05-pedir-a-conta) dos itens consumidos.|
|**Impacto**  | - A [Conta](#l05-pedir-a-conta) é paga;<br> - A mesa pode ser liberada para outros [clientes](#l08-cliente).|
|**Sinônimo**|[pagar](#l12-fazer-pagamento) [Conta](#l05-pedir-a-conta)|
|**Rastreabilidade**|c08, c10, c11, c12, c13|

## L13 - Pedidos
|L13|Pedidos|
|--|--|
|**Classificação**|Objeto|
|**Noção**   | - Os itens que foram [pedidos](#l13-pedidos) pelo cliente.|
|**Impacto**  | - Um [pedido](#l13-pedidos) pode ser solicitado por [clientes](#l08-cliente);<br> - O  [Garçom](#l09-funcionario) vê o [pedido](#l13-pedidos) e manda para a cozinha;<br> - A cozinha prepara o [pedido](#l13-pedidos);<br> - O [Garçom](#l09-funcionario) leva o [pedido](#l13-pedidos) até a [mesa](#l11-mesa-ocupada) do [cliente](#l08-cliente);<br> -  O [cliente](#l08-cliente) pode ver a lista dos [pedidos](#l13-pedidos) que fez até o momento.|
|**Sinônimo**| - |
|**Rastreabilidade**|c03-c06|

## L14 - Internet
|L14|Internet|
|--|--|
|**Classificação**|Objeto|
|**Noção**   | - rede de computadores dispersos por todo o planeta que trocam dados e mensagens utilizando um protocolo comum, unindo [Usuários](#l08-cliente) |
|**Impacto**  | - O [Usuário](#l08-cliente) conecta seu aparelho a internet para poder acessar o [cardápio](#l02-ver-cardapio) e submeter seu [pedido](#l03-fazer-pedidos) |
|**Sinônimo**| web, rede |
|**Rastreabilidade**|-|

## L15 - Smarthpone
|L15|Smarthpone|
|--|--|
|**Classificação**|Objeto|
|**Noção**   | - telefone celular com recursos de um computador pessoal |
|**Impacto**  | - O [Usuário](#l08-cliente) faz interações todas as interações através do celular. |
|**Sinônimo**| celular |
|**Rastreabilidade**|c01, s01|

## L16 - Localização
|L16|Localização|
|--|--|
|**Classificação**|Objeto|
|**Noção**   | - Localização geográfica de onde o [celular](#l14-internet) do [Usuário](#l08-cliente) está|
|**Impacto**  | - Permite ao [Usuário](#l08-cliente) fazer interações com o restaurante apenas quando se encontra dentro dele e antes de [pedir a conta](#l05-pedir-a-conta) |
|**Sinônimo**| onde, local, endereço |
|**Rastreabilidade**|-|

## L17 - Ver Status do pedido
|L16|Ver Status do pedido|
|--|--|
|**Classificação**|Verbo|
|**Noção**   | - Vizualizar se o [pedido](#l13-pedidos) já está sendo processado pelo restaurante.|
|**Impacto**  | - Permite ao [Usuário](#l08-cliente) ver o status do seu [pedido](#l13-pedidos) e assim poder fazer alterações, caso este ainda não foi processado pelo restaurante. |
|**Sinônimo**| Situação do pedido |
|**Rastreabilidade**|c06|

## L18 - Modificar pedido
|L18|Modificar pedido|
|--|--|
|**Classificação**|Verbo|
|**Noção**   | - Alterar um [pedido](#l13-pedidos) que ainda não foi processado pelo restaurante.|
|**Impacto**  | - Permite ao [Usuário](#l08-cliente) alterar um [pedido](#l13-pedidos) que ainda não foi processado pelo restaurante.|
|**Sinônimo**| Alterar pedido, Substituir pedido |
|**Rastreabilidade**|c04, c05|

## L19 - Gerente
| L19 | Gerente |
| -- | -- |
| **Classificação** | Sujeito |
| **Noção**   | - [Usuário](#l08-cliente) que controla os dados do sistema e tem acesso a todas as funcionalidades. |
| **Impacto**  | - Um [Gerente](#l19-gerente) pode visualizar o histórico de ações dos [Funcionários](#l09-funcionario);<br> - Um [Gerente](#l19-gerente) pode cadastrar [Funcionários](#l09-funcionario);<br> - Um [Gerente](#l19-gerente) pode remover [Funcionários](#l09-funcionario);<br> - Um [Gerente](#l19-gerente) pode visualizar gráficos de consumo;<br> - Um [Gerente](#l19-gerente) pode cadastrar, alterar e deletar o cardápio. |
| **Sinônimo** | Administrador |
| **Rastreabilidade** |a01-a05  |

## L20 - Cardápio
| L20 | Cardápio |
| -- | -- |
| **Classificação** | Objeto |
| **Noção** | - Um menu com diversos itens e preços de pratos que o restaurante oferece |
| **Impacto** | - O [Usuário](#l08-cliente) faz seus [pedidos](#l13-pedidos) por ele. |
| **Sinônimo** | Menu |
| **Rastreabilidade** | c02, c16 |

## L21 - Gerar Nova Sessão
| L21 | Gerar Nova Sessão |
| -- | -- |
| **Classificação** | Verbo |
| **Noção** | - Ação realizada automaticamente pelo sistema após o [Funcionário](#l09-funcionario) ou o [Gerente](#l19-gerente) receberem o [pagamento](#l12-fazer-pagamento) do [cliente](#l08-cliente). |
| **Impacto** | - Após o [pagamento](#l12-fazer-pagamento) a mesa será liberada para novo [cliente](#l08-cliente) entrar em nova sessão. |
| **Sinônimo** | Liberar nova conta para novo cliente |
| **Rastreabilidade** | c07 |

## L22 - Cadastrar Cardápio
| L21 | Cadastrar Cardápio |
| -- | -- |
| **Classificação** | Verbo |
| **Noção** | - Cadastro de um novo cardápio ou novos itens e seus preeços para o cardápio já existente. |
| **Impacto** | - O [Gerente](#l19-gerente) cadastra novo cardápio ou novos itens e seus preços para que os [clientes](#l08-cliente) possam ter sempre um variedade de opções para comer. |
| **Sinônimo** | Cadastrar menu, cadastrar novos itens |
| **Rastreabilidade** | f05, a05 |

## L23 - Alterar Cardápio
| L23 | Alterar Cardápio |
| -- | -- |
| **Classificação** | Verbo |
| **Noção** | - Alteração de itens e preços no cardápio já existente. |
| **Impacto** | - O [Gerente](#l19-gerente) altera itens e seus preços para que os [clientes](#l08-cliente) possam ter sempre os pratos e preços atualizados. |
| **Sinônimo** | Alterar menu, alterar novos itens |
| **Rastreabilidade** | f05, a05 |

## L24 - Mesa
| L24 | Mesa |
| -- | -- |
| **Classificação** | Objeto |
| **Noção** | - Simula uma conta onde os pedidos ficam registrados |
| **Impacto** | - O [cliente](#l08-cliente) só pode realizar pedidos através da mesa. |
| **Sinônimo** | Conta |
| **Rastreabilidade** | f02, a05 |

## L25 - Abrir mesa
| L25 | Abrir mesa |
| -- | -- |
| **Classificação** | Verbo |
| **Noção** | - Novo cliente chega e deseja uma mesa |
| **Impacto** | - O [cliente](#l08-cliente) abre uma nova [mesa](l#24mesa). |
| **Sinônimo** | Abrir conta |
| **Rastreabilidade** | f05, a05 |

## L26 - Fechar mesa
| L26 | Abrir mesa |
| -- | -- |
| **Classificação** | Verbo |
| **Noção** | - fechar conta para realizar pagamento |
| **Impacto** | - O [cliente](#l08-cliente) fecha a [mesa](l#24mesa) para ir embora. |
| **Sinônimo** | Fechar conta |
| **Rastreabilidade** | f05, a05 |
