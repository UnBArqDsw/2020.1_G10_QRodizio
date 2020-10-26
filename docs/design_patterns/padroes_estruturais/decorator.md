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
  </tbody>
</table>

## Introdução

<p align="justify">&emsp;
O Decorator é um padrão de projeto estrutural que permite que você acople novos comportamentos para objetos ao colocá-los dentro de invólucros de objetos que contém os comportamentos.
</p>

## Estrutura

![Estrutura decorator](../../images/design_patterns/decorator.png)

## Aplicações no Projeto(QRodízio)

Primeiramente é bom deixar claro que nosso projeto está utilizando de linguagens multi-paradigmas(python e javascript) sendo assim, adaptações ao padões são necessárias para não fugir do esttilo do código utilizado pelo linguegem.

A Linguem python possui em seu "zen of python" a seguinte declaração: "Simple is better than complex". Seguindo a filosifia do "zen of python" **decidimos que, se algo pode ser feito em uma função, então será feito em uma função**.

A linguem python possue uma forma bem singular de decorar funções e classes. E que é muito util para fazer validações antes que uma função seja executada, sendo assim optamos por utilizar do decorator para autentificação de usuário na API.

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

## Referências
<ul>
<li>
REFACTORING.GURU. Strategy. Disponível em: https://refactoring.guru/pt-br/design-patterns/decorator . Acesso em: 26 de outubro. 2020.
</li>
</ul>
