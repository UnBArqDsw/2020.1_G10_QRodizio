# Termo de Abertura

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
      <td>06/09/2020</td>
      <td>Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)</td>
      <td>Criação documento no github/docs</td>
      <td>
      0.1  
      </td>
    </tr>
    <tr>
      <td>08/09/2020</td>
      <td> Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)</td>
      <td>Adiciona tópicos escopo e custos</td>
      <td>
       0.2
      </td>
    </tr>
    <tr>
      <td>10/09/2020</td>
      <td>0.3</td>
      <td>Restruturação/finalização de tópicos e documento</td>
      <td>
        Cauê Mateus Oliveira(<a target="blank" href="https://github.com/caue96">caue96</a>)
      </td>
    </tr>
  </tbody>
</table>

---

# 1. Resumo Executivo
- Definição do projeto (visão, objetivos, escopo e entregáveis);
- Organização do projeto (usuários, stakeholders, papéis, responsabilidades);
- Planejamento do projeto (abordagem, cronograma, planejamento de recursos, financeiro e de qualidade);
- Considerações do projeto (riscos, suposições e restrições);
- Referências.

---

# 2. Definição do Projeto

## 2.1 Visão
Desenvolver um sistema com foco em facilitar rodízios em restaurantes/pizzarias tanto para os clientes quanto para os funcionários.

A ideia base deste sistema consiste na leitura de um um Qr Code que linka para uma mesa, uma vez em uma mesa, o usuário terá acesso ao cardápio e por meio deste poderá  fazer pedidos para a sua mesa. Neste sistema vários mesas poderão estar abertas simultaneamente e os funcionários poderão visualizar os pedidos de cada mesa para assim atendê-las. Para os donos/gerentes de restaurantes o QRodizio facilitará o gerenciamento dos atendimentos e mesas, além de gerar relatórios para estudos do restaurante.

## 2.2 Objetivos
**Objetivos de negócio:**
- Sistema funcional/desenvolvido por completo;
- Agilizar processo de pedido em restaurantes;
- Agilizar saida de pratos pedidos em rodízio;
- Facilitar gerenciamento das mesas;
- Geração de relatórios para acompanhamento do negócio.

**Objetivos de tecnologia:**
- Desenvolver um sistema de entrada por meio da leitura de um Qrcode;

## 2.3 Escopo
- Agilidade no processo do pedido e de rodízio por parte do usuário;
- Desenvolvimento de sistema web para gerenciamento das mesas e geração dos relatórios por parte do administrador;
- Desenvolvimento de sistema web com diversas sessões abertas com leitura de Qrcode por parte do cliente.

## 2.4 Entregáveis
| <center>Item</center> | <center>Componentes</center> | <center>Descrição</center> |
| :--: | :--------- | :-------- |
| Documentação | 1. Protótipo<br> 2. Documento de Visão<br> 3. Documento de Arquitetura<br> 4. Documentos diversos | 1. Simulação do produto final<br> 2. Visão ampla do software<br> 3. Arquitetura que foi desenvolvido o software<br> 4. Documentos que auxiliarão no entendimento por parte do público externo no projeto |
| Código | 1. Primeira versão<br> 2. Segunda versão | 1. Entrega das funcionalidades funcionando<br> 2. Entrega do software com as funcionalidades aprimoradas |

---

# 3. Organização do Projeto

## 3.1 Usuários
| <center>Usuário</center> |
| :-----: |
| Frenquentadores de restaurantes (público diverso) |

## 3.2 Stakeholders
| <center>Stakeholders</center> | <center>Interessado em</center> |
| :----------: | :------------- |
| Restaurantes | Solução inovadora para auxiliar no período de pandemia e pós-pandemia |

## 3.3 Papéis
| Nome | Posição |
| :--: | :-----: |
| [Caio César Beleza](https://github.com/Caiocbeleza) | Full Stack |
| [Cauê Mateus Oliveira](https://github.com/caue96) | Full Stack |
| [Fábio Teixeira](https://github.com/fabio1079) | Full Stack |
| [Lucas Midlhey](https://github.com/lucasmidlhey) | Full Stack |
| [João Pedro Gomes](https://github.com/jppgomes) | Full Stack |

## 3.4 Responsabilidades

Todos do grupos rodaram por todas as posições sendo Full Stack. Abaixo colocamos os papeis possíveis dentro do projeto e as atribuições de cada um:

**Arquiteto:**
- Levantamento de roadmap de requisitos;
- Proposta de arquitetura micro serviços;
- Orquestração de containeres com micro serviços.

**Desenvolvedor:**
- Código/Entrega;
- Documentação;
- Coerência - documentos e código|;
- Histórias e planejamento da release;
- Testes automatizados e cobertura de código;
- Tracking;
- Wiki Atualizada;
- Software implantado e disponível para uso.

**DevOps:**
- Ambiente de desenvolvimento via container;
- Gitflow;
- Pipeline de integração e deploy contínuos;
- Integração contínua;
- Ambiente de homologação/produção;
- Roadmap de deploy contínuo;
- Evidência de deploy contínuo.

**Product Owner:**
- Visão de produto;
- Retorno de Investimento (ROI);
- Plano de negócio - Canvas;
- Priorização das issues - visão de produto;
- Guia de usabilidade/protótipos de identidade visual - identidade visual;
- Roadmap de produto - MVP + Pitch de venda.

**Scrum Master:**
- Comunicação;
- Indicadores e métricas de produtividade;
- Metas de entrega contínua;
- Monitoramento e controle Ágil;
- Roadmap para alcancar a produtividade máxima do time;

---

# 4. Planejamento do projeto

## 4.1 Abordagem
| Fase | Abordagem |
| :--: | :-------- |
| Iniciação | Autorização para início do projeto |
| Ideação | Definições do projeto, design e prototipação |
| Criação | Planejamento, desenvolvimento, teste e revisão. Processo se repete em loop |
| Evolução | Transferência de conhecimento e melhoria contínua. Vem logo após a etapa de criação e também se repete em loop |

## 4.2 Cronograma
Decidimos por não definir um conograma muito detalhado, pois como estamos trabalhando remotamente sabemos que diversos problemas podem vir acontecer e com isso decidimos seguir o calendário da matéria de Desenho com os entregáveis dentro de cada uma das 4 *milestones* do projeto. Os períodos dos entregáveis foram colocamos no tópico abaixo, sendo que nesse tópico colocaremos o que será entregue em cada uma dessas *releases*.

**Release 1**: artefatos base para entendimento e aprofundamento do tema a ser trabalhado, detalhamento da metodologia a ser utilizada, modelagem dos processos e algumas outras documentações extras como por exemplo as atas de reunião.<br>
**Release 2**: Criar os documentos com notação UML, tendo os diagramas estáticos e dinâmicos e refinamento de documentos da *release* 1.<br>
**Release 3**: Início da aplicação se utilizando dos padrões de projeto GoFs e refinamento dos documentos da *release 2* e *release* 1.<br>
**Release 4**: Término da aplicação se utilizando do padrão arquitetural definido e deixando as funcionalidade desenvolvidas separadas em módulos, para elas terem sua certa independência para reutilização.

## 4.3 Planejamento de Recursos
**Release 1**

| Posição | Data de início | Data final | Esforço |
| :---: | :------------: | :--------: | :-----: |
| Full Stack | 17/08/2020 | 11/09/2020 | 100% |

**Release 2**

| Papel | Data de início | Data final | Esforço |
| :---: | :------------: | :--------: | :-----: |
| Full Stack | 14/09/2020 | 28/09/2020 | 100% |

**Release 3**

| Papel | Data de início | Data final | Esforço |
| :---: | :------------: | :--------: | :-----: |
| Full Stack | 29/09/2020 | 26/10/2020 | 100% |

**Release 4**

| Papel | Data de início | Data final | Esforço |
| :---: | :------------: | :--------: | :-----: |
| Full Stack | 27/10/2020 | 20/11/2020 | 100% |

## 4.4 Planejamento Financeiro
O custo do projeto será calculado levando em consideração 4 premissas:
- Tempo fixo de desenvolvimento de 15 semanas, sendo uma média de 8 horas de trabalho semanalmente para cada desenvolvedor;
- Trabalho sendo realizado 100% remoto;
- Escopo do software definido com base no tempo determinado de trabalho dos 2 pontos anteriores;
- Número de membros da equipe não irá aumentar e se diminuir o trabalho será redistribuido entre os outros membros assim como o valor ganho pelo membro que saiu.

Tomando como base essas 4 premissas podemos fazer o cálculo de quanto custará esse projeto.<br>
O custo do projeto será calculado com base no salário da mão de obra de desenvolvedores full stack apontado pelo site do stackoverflow. O site calcula os valores antes da taxação de impostos de ganhos anuais em média com desenvolvimento de software. Ele possui filtros de posição, localização, educação, anos de experiência e tecnologias. Para o cálculo de nosso custo levaremos em consideração os critérios apontados na tabela abaixo.

| Posição | Localização | Educação | Anos de experiência | tecnologias |
| :-----: | :---------: | :------: | :-----------------: | :----------------: |
| Full Stack | Brasília - Distrito Federal | Menos que bacharelado | 1 | <ul><li>css</li><li>html</li><li>python</li><li>javascript</li><li>vuejs</li></ul> |

<dl>
    <dt>Explicação dos critérios:</dt>
        <dd>Posição: toda a equipe foi colocada como full stack, pois chegamos a conclusão de que todos do grupo terão que fazer um pouco de tudo no projeto.</dd>
        <dd>Localização: como somos todos de Brasília o valor foi colocado como mão de obra de nossa localização.</dd>
        <dd>Educação: o que mais se aproxima de graduando nos filtros é o de menos que bacharelado.</dd>
        <dd>Anos de experiência: fizemos um levantamento entre os membros do grupo e em média temos 1 ano de experiência por membro.</dd>
        <dd>Tecnologias: colocamos as tecnologias que tinham no stackoverflow e terão em nosso projeto.</dd>
</dl>

Após pedido para calcular o salário a calculadora nos retorna salários em 3 bases: os que ganham menos do que 75% dos desenvolvedores, os que ganham na média e os que ganham mais do que 75% dos desenvolvedores. Levando em consideração o nível do estudo que temos na Universidade de Brasília, a UnB nos da base para ganhar no espaço dos que ganham mais do que 75% dos desenvolvedores e será nesse bloco que faremos os cálculos da mão de obra. No quadro abaixo podemos ver a quantidade de pessoas por posição, experiência e o valor hora que será cobrado.

| Quantidade | Posição | Valor/Hora |
| :--------: | :-----: | :--------: |
| 5 | Full stack | 31,77 |

Considerando as premissas colocadas e o valor/hora definido por membro já podemos fazer o cálculo de quanto será o desenvolvimento do software no período determinado. A quantidade de horas total trabalhadas no projeto será de:

Quantidade total projeto/membro = (8 * 15) = 120 horas

```
Custo = Horas total projeto * valor/hora * Número membros

5 desenvolvedores full stack com 1 ano de experiência:
    Custo = 120 * 31,77 * 5 = R$ 19.062,00

Custo Total = R$ 19.062,00
```

O projeto terá um custo de **R$ 19.062,00** mais custos adicionais por meio de apresentação de notas fiscais em casos de necessidade de deslocamentos e alimentações. Somente foi considerado esse custo de mão de obra, pois considerando que houvesse um contratante ele levaria em consideração esse custo da mão de obra com gastos que não seja de deslocamento e alimentação inclusos.

## 4.5 Planejamento de Qualidade
| Processo | Descrição |
| :------: | :-------- |
| Gerenciamento de integração | Bastante comunicação entre todos para que como um grupo saibamos o que está acontecendo em todas as pontas |
| Gerenciamento de escopo | Manter escopo similar ao que foi acordado no início do projeto |
| Gerencimento do cronograma | Cumprimento dos prazos com o que foi combinado no cronograma, manter eventos com a sequência precisa e atualizada |
| Gerenciamento de custo | Manter os custos do projeto dentro do que foi acordado no início do projeto, fazer uso dos recursos dentro do orçamento e do tempo de projeto |
| Gerenciamento da qualidade | Revisão de todo trabalho realizado, templates para issue e pull request, folha de estilo e boas práticas de desenvolvimento de software |
| Gerenciamento de recurso | Utilizar membros com eficiência, sabendo alocar duplas de pareamento de acordo com o conhecimento, experiência e habilidade de cada um |
| Gerenciamento de comunicação | Montar estrutura de comunicação eficiente, rápida e fazer o controle de informações de todos os membros |
| Gerenciamento de risco | Identificar, analisar e controlar riscos, elaborando um plano para que haja resposta rápidas quando surgir |
| Gerenciamento de projeto | Solução de problemas no momento que eles acontecerem, sempre motivando a equipe e tirando a pressão sobre os membros para que eles possam atingir a melhor produtividade possível |

---

# 5. Considerações do Projeto

## 5.1 Riscos
| Descrição | Probabilidade | Impacto | Ações de mitigação |
| :-------- | :-----------: | :-----: | :----------------- |
| Desistência de membro | Média | Alto | Acúmulo de função por membro que tiver com menos trabalho para fazer |
| Ausência constante de membro | Alta | Médio | Identificar o membro com problemas e entregar tarefas mais simples e menos importantes para ele |
| Atrasos por dificuldades com as tecnologias | Média | Baixo | Atraso inicial em entregas do software por dificuldades com as tecnologias utilizadas |
| Problemas com computadores de membro da equipe | Média | Baixo | Procurar outro computador para membro com problemas continuar o trabalho |
| Falta de comunicação | Alta | Médio | Motivar a equipe a se comunicar melhor, encorajar a comunicação, deixar claro a importância da comunicação e reforçar os meios de comunicação oficiais da equipe |

## 5.2 Suposições
- Escopo não irá mudar durante o desenvolvimento do software;

## 5.3 Restrições
- A quantidade de pessoas participantes no projeto não será aumentada até final dos desafios do projeto;
- Restrição de custo com desenvolvimento;

---

# 6. Referências

1. [https://stackoverflow.com/jobs/salary](https://stackoverflow.com/jobs/salary/results?l=Brasilia%2c+Brazil&ed=0&ex=1&ff=1&dr%5B0%5D=FullStackDeveloper&tl%5B0%5D=css&tl%5B1%5D=html&tl%5B2%5D=javascript&tl%5B3%5D=python&tl%5B4%5D=vue.js)<br>
2. [www.projectmanager.com](https://www.projectmanager.com/templates/project-charter-template?a=downloadGateUnlock&r=5d7ac3d9ae36e&e=Y2F1ZW1hdGV1c0Bob3RtYWlsLmNvbQ==)