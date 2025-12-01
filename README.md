Testes da Tela de Cadastro (cadastro.html)

A tela de Cadastro passa por uma série de testes E2E utilizando Cypress para validar o comportamento dos campos, regras de validação e fluxo de cadastro.

Cenários de teste implementados
1. Exibir todos os campos da tela

Verifica se os elementos essenciais aparecem corretamente:

Nome completo

E-mail

Senha

Confirmar senha

Botão "Cadastrar"

2. Impedir cadastro com senhas diferentes

Garantir que o sistema exibe a mensagem:
"As senhas não coincidem!"

3. Impedir cadastro com senha fraca

Valida a regra definida no script:

8 caracteres

Maiúscula

Minúscula

Número

Caractere especial

Mensagem esperada:
"A senha deve ter pelo menos 8 caracteres"

4. Realizar cadastro com sucesso

Preenche todos os campos corretamente

Senhas válidas e iguais

Deve exibir alerta: "Cadastro realizado com sucesso!"

Deve redirecionar para (login.html)
