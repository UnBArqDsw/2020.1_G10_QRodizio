## Decorator

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
      <td>Adicionando utilização do decorator no projeto</td>
      <td>0.1</td>
    </tr>
        <tr>
      <td>27/10/2020</td>
      <td>
        Fábio Teixeira(<a target="blank" href="https://github.com/fabio1079">fabio1079</a>)
      </td>
      <td>Correções básicas</td>
      <td>0.2</td>
    </tr> 
    <tr>
      <td>16/11/2020</td>
      <td>
        Lucas(<a target="blank" href="https://github.com/lucasmidlhey">lucasmidlhey</a>)
      </td>
      <td>Justificativa</td>
      <td>0.4</td>
    </tr>
  </tbody>
</table>

## Introdução

<p align="justify">&emsp;
O Decorator é um padrão de projeto estrutural que permite acoplar novos comportamentos para objetos ao colocá-los dentro de invólucros de objetos que contém os comportamentos.
</p>
<p align="justify">&emsp;
“Envoltório” ou “wrapper é o apelido alternativo para o padrão Decorator que expressa claramente a ideia principal dele. Um envoltório é um objeto que pode ser ligado com outro objeto alvo. O envoltório contém o mesmo conjunto de métodos que o alvo e delega a ele todos os pedidos que recebe. Contudo, o envoltório pode alterar o resultado fazendo alguma coisa ou antes ou depois de passar o pedido para o alvo.
</p>
<p align="justify">&emsp;
O envoltório implementa a mesma interface que o objeto envolvido. É por isso que da perspectiva do cliente esses objetos são idênticos. É necessário fazer o campo de referência do envoltório aceitar qualquer objeto que segue aquela interface. Com isso será permitido cobrir um objeto em múltiplos envoltórios, adicionando o comportamento combinado de todos os envoltórios a ele.
</p>

## Estrutura

![Estrutura decorator](../../images/design_patterns/decorator.png)

## Aplicações no Projeto(QRodízio)

### Disclaimer

Primeiramente é bom deixar claro que nosso projeto está utilizando de linguagens multi-paradigmas(python e javascript) sendo assim, adaptações aos padrões são necessárias para não fugir do estilo do código utilizado.

A Linguem python possui em seu "zen of python" a seguinte declaração: "Simple is better than complex". Seguindo essa filosifia, decidimos que, se algo pode ser feito em uma função, então será feito em uma função. Assim mantendo um código mais limpo, simples e fácil de manter.

### Utilização

A linguem python possui uma forma bem singular de decorar funções e classes. E que é muito util para fazer validações antes que uma função seja executada, sendo assim optamos por utilizar do decorator para autentificação de usuário na API.

Segue um exemplo do uso de decorator no código do qrcode:

### Definição do decorator em [authentication.py](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/develop/qrodizio/ext/authentication.py)

```python
def auth_required(role=EmployeeRole.basic):
    """
    Verifies if request has a valid token.
    Then calls a permission strategy
    """

    def decorated(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            try:
                token = _get_token_from_headers()

                pure_token = token.replace("Bearer ", "")
                decoded = jwt.decode(pure_token, get_secret_key())
                current_employee = Employee.query.get(decoded["id"])

                return _role_check(f, current_employee, role, *args, **kwargs)
            except jwt.ExpiredSignatureError:
                return jsonify({"error": "expired token"}), 401
            except UserUnauthorizedException as e:
                return jsonify({"error": "User unauthorized"}), e.status_code
            except Exception:
                return jsonify({"error": "invalid token"}), 401

        return wrapper

    return decorated
```

### Exemplo de utilização do decorator em [api/auth.py](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/develop/qrodizio/views/api/auth.py)

```python
@auth_bp.route("/register", methods=["POST"])
@auth_required(role=EmployeeRole.manager)
def auth_register_employee(current_employee):
    ...
```

### Exemplo de utilização do decorator em [api/demands.py](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/develop/qrodizio/views/api/demands.py)

```python
@demands_bp.route("/<demand_status>", methods=["GET"])
@auth_required()
def list_demands_by_status(current_employee, demand_status):
    ...
```

## Justificativa

Decorator é muito simples quando se utiliza python, ja que a linguagem ja pre estabelece que o mais simples é o melhor jeito. Desta forma utilizar o decorator para autenticação se torna mais pratico no decorrer de quando necessário na aplicação atraves das views utilizadas.

## Referências

<ul>
<li>
REFACTORING.GURU. Strategy. Disponível em: https://refactoring.guru/pt-br/design-patterns/decorator . Acesso em: 26 de outubro. 2020.
</li>
</ul>
