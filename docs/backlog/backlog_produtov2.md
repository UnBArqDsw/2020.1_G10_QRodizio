# Features

## Histórico de versões

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
      <td>23/09/2020</td>
      <td>
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)
      </td>
      <td>Criação do documento</td>
      <td>0.1</td>
    </tr>
    <tr>
      <td>25/09/2020</td>
      <td>
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)
      </td>
      <td>Atualiza feat 1</td>
      <td>0.2</td>
    </tr>
  </tbody>
</table>



## Introdução
Features desejadas e suas dependências em relação ao que foi levantado na versão 01 do backlog.  Existem requisitos elicitados no backlog v1 que estão presentes em mais de uma feature.


##  1. QR Code
- s01: O sistema deve gerar QR Code
- c01: O cliente deve poder ler QR Code
- f02: O sistema deve permitir gerar novo QR Code de mesa

### Comentários sobre a feature
* Cabe ao funcionário requisitar ao sistema a geração de QR Code para cada mesa.
* Cada QR Code está vinculado a uma URL, quando a sessão muda(mesa é fechada), a URL também muda, mas nao necessáriamente o QRCode, este muda somente quando requisitado por um funcionário.


## 2. Papéis
- s03: O sistema deve ter papéis de acesso (Administrador/Gerente, Garçom/Funcionário, Cliente)


## 3. Gerar gráficos e estatísticas
- s04: O sistema deve poder gerar gráficos(consumo,mais pedidos, etc)
- s05: Gerar estatísticas
- a03: O sistema deve permitir visualizar gráficos de consumo


## 4.  Manter cardápio
- c02: O cliente deve poder acessar o cardápio
- c15: O cliente deve poder sugerir adições ao cardápio**(também na feat 8)
- f05: O sistema deve permitir Cadastrar cardápio do dia
- a05: O sistema deve permitir Cadastrar cardápio geral


## 5. Manter mesa
- s02: O sistema deve gerar uma nova URL da mesa para cada sessão aberta**(também na feat 1)
- c06: O cliente deve poder abrir mesa
- c08: O cliente deve poder Chamar garçom
- f02: O sistema deve permitir Gerar novo QR Code para a mesa
- f04: O sistema deve permitir Fechar mesa
- f06: O sistema deve permitir ao funcionário ver se a mesa está livre ou ocupada


## 6. Manter pedido
- c03: O cliente deve poder realizar pedidos
- c04: O cliente deve poder cancelar pedidos
- c05: O cliente deve poder visualizar pedidos
- f03: O sistema deve Informar pedido pronto
- f07: O sistema deve notificar ao funcionário sobre novos pedidos
- c16: O cliente deve poder visualizar status do pedido(aguardando,processando,feito)

### Comentários sobre a feature
* visualizar pedidos deve mostrar tanto os pedidos já na mesa, quanto os que ainda estão sendo processados


## 7. Manter pagamento
- c07: O cliente deve poder escolher forma de pagamento
- c09: O cliente deve poder alterar forma de pagamento
- c10: O cliente deve poder dividir pagamento
- c11: O cliente deve poder visualizar pagamento total(da mesa)
- c12: O cliente deve poder visualizar pagamento parcial(só do cliente)

### Comentários sobre a feature
* Em um rodízio as bebidas são um calculo a parte, logo c11 é valor rodízio + todas as bebidas e c12 só bebidas requisitadas pelo cliente.


## 8. Manter avaliações
- c13: O cliente deve poder avaliar atendimento
- c14: O cliente deve poder avaliar restaurante
- c15: O cliente deve poder sugerir adições ao cardápio**(também na feat 4)


## 9. Manter funcionário
- f01: O sistema deve permitir o cadastro de funcionários
- f08: O sistema deve permitir ao funcionário alterar seus dados
- a01: O sistema deve permitir visualizar histórico de ações dos funcionários
- a02: O sistema deve permitir cadastro de gerentes
- a04: O sistema deve permitir remover funcionários
- a06: O sistema deve permitir alterar papel de funcionário

