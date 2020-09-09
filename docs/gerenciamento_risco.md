# Plano de Gerenciamento de Riscos
## Histórico de versões

| Data     | Autor         | Descrição            | Versão |
| -------- | ------------- | -------------------- | ------ |
| 08/09/20 | Lucas Midlhey(<a target="blank" href="https://github.com/lucasmidlhey">Lucas Midlhey</a>)| Criação do documento | 0.1    |
| 08/09/20 | João Pedro(<a target="blank" href="https://github.com/jppgomess">João Pedro</a>)    | Introdução e EAR | 0.2 |
| 08/09/20 | Lucas Midlhey(<a target="blank" href="https://github.com/lucasmidlhey">Lucas Midlhey</a>)   |Análise quantitativa de riscos e  riscos levantados| 0.3 |

## Introdução

O objetivo desse documento é identificar possíveis riscos futuros que podem dificultar ou atrasar o desenvolvimento do projeto. Existem dois tipos de riscos a serem mapeados:
**Riscos externos**: Os riscos externos referem-se aqueles que não estão sob controle da organização, como a variação cambial, variação das taxas de juros, aumento de impostos.
**Riscos internos**: Os riscos internos são aqueles que são as consequências da atuação da própria empresa.
Com os respectivos riscos mapeados, devem ser traçados planos de contingência, ações a serem tomadas para que sejam minimizados ou evitar que os riscos ocorram.

## **Estrutura analítica de riscos**

Do inglês Risk Breakdown Structure (RBS), a Estrutura Analítica de Riscos (EAR) é uma ferramenta pela qual
você agrupa riscos e organiza-os em categorias. Cada categoria é então dividida em níveis,
sendo que cada nível detalha a fonte de riscos para seu projeto, atividade, área e/ou empresa.
Portanto, a EAR é uma estrutura hierárquica de possíveis fontes de risco.

### Descrição

[![EAR](../images/EAR.png)](https://ibb.co/J2M5wqB)

#### Externos

- **Concorrência**: Produtores/vendedores de um determinado bem e/ou serviço atuam de forma independente face aos compradores/consumidores, se ja existir alguma ferramente consolidada no mercado, pode ser um risco para o projeto.
- **Cliente**: O cliente pode não gostar do produto desenvolvido ou não conseguir utilizá-lo de forma adequada.
- **Internet**: Se a internet do estabelecimento não funcionar pode prejudicar o funcionamento do aplicativo.
- **Ambiente**:O ambiente pode influenciar no desempenho da equipe e no desenvolvimento do produto, um exemplo aplicado ao nosso projeto é o fato de a maior parte do desenvolvimento acontece através do home office e uma das limitações que pode ocorrer é a falta da internet ou comunicação entre os integrantes.

#### Técnicos

- **Tecnologias**: Alguns integrantes por não possuírem experiência em determinadas tecnologias utilizadas no projeto, podem ser afetadas durante o desenvolvimento do projeto.
- **Requisitos**: Podem acontecer falhas/perdas no processo de levantamento de requisitos o que pode acarretar em falta de funcionalidades e insatisfação do cliente.
- **Infraestrutura**: A infraestrutura deve ser capaz de sustentar grandes níveis de usuários e possuir um tempo de resposta satisfatório para o cliente.

#### Qualidade

- **Testes**: A aplicação deverá ser testada de ponta a ponta, principalmente pelo fato de processar pagamentos e pedidos de clientes.
- **Funcionalidades**: Tudo relacionado à funcionalidade do software, como garantir que os requisitos foram atendidos de forma satisfatória, garantir que atende a real necessidade do usuário e se retornará resultados precisos.
- **Usabilidade**: Responsável pela interface do usuário, permitindo que a experiência seja digital do cliente seja tão boa quanto a experiência com cardápios de papel.
- **Validação**: Validar as funcionalidades com o cliente.
- **Eficiência**: Garantir que o usuário consiga ter as respostas da aplicação de forma rápida e coesa.
#### Organizacional

- **Prioridades**: São riscos relacionados aos erros de priorização, gerando atrasos nas entregas, por existir dependências entre as tarefas.
- **Motivação**: Proporcionar condições motivadoras para os desenvolvedores.

#### Gerência

- **Escopo**: Risco relacionado ao tamanho do escopo do projeto, devido ao curto prazo de desenvolvimento é preciso gerenciar o escopo do projeto para que não seja criada expectativas que não vão ser atendidas.
- **Ritos ágeis**: Não cumprimento dos ritos, afetando o acompanhamento e desenvolvimento do projeto.
- **Comunicação**: Falta de comunicação entre os membros, principalmente pelo fato das atividades presenciais estarem suspensas devido a pandemia.
- **Prazo**: ão riscos relacionados a erros de planejamento, como tarefas grandes em períodos curtos.
- **Desistência**: A um grande risco de membros da equipe desistirem do projeto.
## Análise quantitativa de riscos

### Impacto

Para se quantificar o impacto do risco no projeto o custo, o tempo, o escopo e a qualidade devem ser levados em conta.

A tabela abaixo deve ser usada como referência:

|**Impacto**  | **Intervalo** |**Descrição**|**Representação**|
|--|--|--|--|
|Muito baixo  | menor que 20% | Impacto pouco expressivo no desenvolvimento do projeto | 1 |
|Baixo| de 21% a 40% | Possui certo impacto porém é facilmente recuperado |  2|
|Médio  | de 41% a 60% | Possui certo impacto porém é facilmente recuperado |3  |
|Alto  | de 61% a 80% | Há grande impacto no desenvolvimento do projeto |  4|
|Muito Alto| Acima de 80%|O impacto inviabiliza o projeto | 5|

### Probabilidade
Para quantificar um risco em relação a sua probabilidade de ocorrência a tabela a seguir deve ser utilizada:
|**Probabilidade**| **Intervalo** |**Representação**|
|--|--|--|
| Muito Baixa |menor que 10%  | 1 |
| Baixa | de 11% a 30% | 2 |
| Média | de 31% a 50% | 3 |
| Alta | de 51% a 60% | 4 |
| Muito Alta | maior de 60% | 5|

### Prioridade

Para definir a prioridade do risco deve-se relacionar a Probabilidade com o Impacto por meio da matriz Probabilidade x Impacto a seguir:

| **Probabilidade / Impacto** |**Muito Baixa**  |**Baixa** | **Média**| **Alta**|**Muito Alta**|
|--|--|--|--|--|--|
| Muito baixo | 1 | 2 | 3 | 4 | 5 |
|Baixo  |2  | 4 |  6| 8 | 10 |
| Médio | 3 | 6 | 9 | 12 | 15 |
| Alto | 4 | 8 | 12 | 16 | 20 |
|Muito alto  | 5 | 10 | 15 | 20 | 25 |

O valor da prioridade definido na matriz Probabilidade x Impacto deve ser traduzido, utilizando a seguinte tabela:

| **Prioridade** | **Intervalo** |
|--|--|
| Muito Baixa | 1~4 |
|Baixa | 5~9|
|Média |10~14 |
|Alta |15~19 |
|Muito Alta |20~25 |

## Riscos levantados

| Riscos | Descrição | Categoria EAR | Probabilidade | Impacto | Ação | Prioridade |
|--|--|--|--|--|--|--|
| R01 | Dificuldade com as tecnologias | Técnico - Tecnologia | Média | Muito Alto | Estudo e pareamentos efetivos | 15 |
| R02 | Redução dos membros da equipe | Externo - desistência | Baixa | Muito Alto | Comunicação efetiva, motivação, e redistribuição das tarefas | 10 |
| R03 | Mudança de escopo | gerencia - escopo | Alta | Médio | Redefinir o escopo e redistribuir as novas tarefas | 12 |
| R04 | Falta de comunicação | Gerencia - Comunicação | Média | Médio | Usar meios de comunicações comuns entre os membros | 9 |
| R05 | Perda de equipamentos da equipe | Externo - Ambiente | Muito Baixa | Muito Alto | Definir pareamentos que permitam ocorrer presencialmente | 5 |
| R06 | Alteração nas datas da disciplina | Externo - Ambiente  | Média | Alto | Redefinir datas das entregas | 12 |
| R07 | Entregas atrasadas | Gerencia - Planejamento | Alta | Alto | Definição de uma nova data para a entrega e se necessário um novo pareamento | 16 |
| R08 | Dependência das atividades | Gerencia - Planejamento | Muito Baixa | Alto | Redefinição das tarefas a fim de acabar com a dependência | 4 |
| R09 | Fácil adaptação a tecnologia | Técnico - Tecnologia | Baixa | Médio | Possibilidade de adição de novas features | 6 |
| R10 | Falta nas reuniões | Externo- Condições de trabalho | Baixa | Alto | Acompanhar o motivo da falta e buscar recuperar o atraso | 8 |
| R11 | Pareamento não efetivos | Externo- Fatores Pessoais | Médio | Alto | Tentar aumentar a comunicação entre os membros e se extremamente necessário realocar membros em outras atividades. | 12 |
| R12 | Conflito de entregas em outras disciplinas | Externo- Fatores pessoais | Muito Alto | Médio | Produzir backlog de sprints reduzidos | 15 |
