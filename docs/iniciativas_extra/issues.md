# Política de Issues

## Histórico de versões

| Data     | Autor         | Descrição            | Versão |
| -------- | ------------- | -------------------- | ------ |
| 29/08/20 | Lucas Midlhey(<a target="blank" href="https://github.com/lucasmidlhey">Lucas Midlhey</a>)| Criação do documento | 0.1    |

## Padrão de Issue

As issues são uma maneira de manter um controle de tarefas, melhorias e bugs para projetos. Elas ajudam a mitigar o risco de trabalho duplicado e um meio de comunicação com contribuidores.

### Criar Issue

- Toda tarefa executada no projeto deve ser referente a uma issue
- O nome e conteúdo da issue deve ser escrito em português
- O nome definido para cada issue deve começar com um verbo no infinitivo
- O nome da issue deve ser significativo e o mais breve possível
- Toda issue deve possuir uma descrição concisa da tarefa que deve ser executada
- No caso de issues que executem várias micro tarefas, deve-se colocar essas tarefas na sua descrição em forma de checklist
- Toda issue deve ser atribuída a pelo menos um membro do grupo
- No caso de issues que se refiram a documentos ou ferramentas externas ao Git, o link referente deve estar contido em forma de comentário na issues

### Nomenclatura de título

Deve conter de forma breve a tarefa a ser desenvolvida. Padrão para issues em geral é **[Verbo inifinitivo]** + **[substantivo]**.
Em casos como Histórias de Usuário (User Story) é preciso colocar a um pre-fixo para referenciar o tipo de Issue, **[USX]** + **[Verbo inifinitivo]** + **[Substantivo]**

Ex:

- Criar documento de visão
- US12 - Manter usuário

### Corpo da Issue

Todas as Issues devem possuir uma descrição detalhada de o que deve ser feito e como deve ser feito.

Em caso de User Story, a issue deve seguir um padrão onde deve responder as seguintes perguntas:

Eu como **[Papel]**, quero **[Meta]** para que eu possa **[Motivo]**.

Ex.: _“Eu, como **desenvolvedor**, desejo **realizar os testes funcionais das classificações**, para **garantir o devido funcionamento da aplicação**”_

Casos de Issues que possuem micro taferas após a descrição detalhada, deve haver um checklist de todas as operações que deve ser realizada.

## Classificação de Labels

As labels são etiquetas para auxiliar o desenvolvedor a identificar e direcionar o tipo de issue.
As issues levantadas são:

- Documentação: Documentação de todos os tipos que não seja código
- Arrumar problema: Para corrigir bugs encontrados no software
- Código: desenvolvimento de código
- Aprimoramento: melhora de documentação e código
- Pendencia: ficou para a proxima Sprint
- Pull Request: referente a Pull request
- Reunião: definido em reunião
- Precisa de atenção: necessita de atenção ou por pendencia ou por dificuldade
- Ajuda: pessoas que foram atribuídas a ela precisarem de ajuda de outros

## Referências

[1] Github. Configuring issue templates for your repository [Issue template](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/configuring-issue-templates-for-your-repository)
[2] Gitlab.  Description templates [Issue template](https://docs.gitlab.com/ee/user/project/description_templates.html)
