## Factory

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
      <td>Adicionando utilização do factory no projeto</td>
      <td>0.1</td>
    </tr>
  </tbody>
</table>

## Introdução

<p align="justify">&emsp;
O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.
</p>

## Estrutura

![Estrutura Strategy](../../images/design_patterns/factory.png)

## Aplicações no Projeto(QRodízio)

Primeiramente é bom deixar claro que nosso projeto está utilizando de linguagens multi-paradigmas(python e javascript) sendo assim, adaptações ao padões são necessárias para não fugir do esttilo do código utilizado pelo linguegem.

A Linguem python possui em seu "zen of python" a seguinte declaração: "Simple is better than complex". Seguindo a filosifia do "zen of python" **decidimos que, se algo pode ser feito em uma função, então será feito em uma função**.

Em nossa base de código o padrão factory é utilizado para definir qual estratégia de verificação de autorização de usuário será utilizada

Segue um exemplo de uso do padrão factory em [authentication](https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/develop/qrodizio/ext/authentication.py):
```python
def _role_check(func, employee, role, *args, **kwargs):
    """Check user permission based on its role"""
    checker = permission_strategy_factory(role)

    if checker(employee):
        return func(current_employee=employee, *args, **kwargs)
    else:
        raise UserUnauthorizedException(403)


def permission_strategy_factory(role):
    """Given a role, returns a permission strategy for that role"""
    if role == EmployeeRole.basic:
        return basic_permission_strategy
    elif role == EmployeeRole.manager:
        return manager_permission_strategy
    else:
        return no_permission_strategy
```

## Referências
<ul>
<li>
REFACTORING.GURU. Strategy. Disponível em: https://refactoring.guru/pt-br/design-patterns/factory-method . Acesso em: 26 de outubro. 2020.
</li>
</ul>
