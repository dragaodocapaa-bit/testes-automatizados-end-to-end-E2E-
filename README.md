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

-----------------------------------------------------------------------------------------------------------------------------

*** Testes da Tela Home (home.html) ***

A página Home é estática, portanto os testes garantem a presença correta dos elementos visuais e navegáveis.

 Cenários de teste implementados
1. Navbar deve ser exibida corretamente

Confere:

Nome da aplicação "Connext"

Link para Home

Botão "Login / Cadastro"

2. Exibir o título principal

Verifica presença de:
"Bem-vindo ao Connext"

3. Exibir seção "Sobre o Projeto"

Confirma títulos e textos institucionais.

4. Exibir lista de objetivos

Testa os itens:

Objetivo 1

Objetivo 2

Objetivo 3

Objetivo 4

5. Exibir footer

Garantir que o rodapé aparece corretamente.

6. Validar redirecionamento do botão "Login / Cadastro"

O botão deve apontar para:

login.html

7. Testar responsividade básica

Testa a renderização em viewport mobile (375×667).
