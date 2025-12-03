# README — Testes E2E com Cypress (Tela Home)

Este documento explica como os testes foram criados, como executá‑los e o que cada teste valida. Ele foi gerado com base nos arquivos **home.cy.js** e **home.html** fornecidos pelo projeto.

---

## 📌 1) Pré‑requisitos
Antes de executar os testes, instale:

- **Node.js** (versão LTS)
- **npm** (já vem com o Node)
- **Google Chrome** ou outro navegador suportado pelo Cypress

---

## 📁 2) Estrutura do Projeto
A estrutura mínima esperada é:

```
/meu-projeto
  ├─ cypress/
  │   ├─ e2e/
  │   │   └─ home.cy.js
  ├─ home.html
  ├─ package.json
  └─ README.md
```

Coloque seu arquivo `home.cy.js` dentro da pasta padrão de testes do Cypress (`cypress/e2e`).

---

## ▶️ 3) Como Executar os Testes (Passo a Passo exato)

Este é o procedimento organizado em formato de tutorial:

### **1️⃣ Abra a pasta do projeto**
Use o Explorador de Arquivos (Windows) e navegue até a pasta onde estão `home.html` e seus arquivos do Cypress.

### **2️⃣ Na barra de caminho da pasta, digite `cmd` e pressione ENTER**
Isso abrirá o terminal exatamente na pasta do projeto.

### **3️⃣ Inicialize o projeto Node**
```
npm init -y
```
Esse comando cria o `package.json` automaticamente.

### **4️⃣ Instale o Cypress**
```
npm install cypress --save-dev
```
(O comando correto é esse — usar `npm cypress install` não é o ideal.)

### **5️⃣ Abra a interface do Cypress**
```
npx cypress open
```
A interface gráfica será aberta.

### **6️⃣ Clique em *Continuar* quando solicitado**

### **7️⃣ Escolha o navegador (Chrome, Edge, etc.)**

### **8️⃣ Clique em um dos arquivos de teste (ex.: `home.cy.js`)**
O Cypress abrirá uma janela do navegador e começará a executar os testes.

---

## 🧪 4) O que os Testes Verificam
O arquivo `home.cy.js` foi planejado para validar os principais elementos da interface da página **home.html**.

### ✔ Navbar
- Verifica se a navbar aparece
- Confere se os links `Connext`, `Home` e `Login / Cadastro` existem

### ✔ Título principal
- Verifica o texto: **"Bem‑vindo ao Connext"**

### ✔ Seção Sobre o Projeto
- Confere se o título "Sobre o Projeto" está visível
- Verifica o parágrafo descritivo inicial

### ✔ Lista de Objetivos
- Confere a lista com:
  - Objetivo 1
  - Objetivo 2
  - Objetivo 3
  - Objetivo 4

### ✔ Footer
- Verifica se o footer aparece
- Confirma o texto **2025 Connext**

### ✔ Botão Login / Cadastro
- Confere se o botão leva para `login.html`

### ✔ Responsividade (Mobile)
- Simula a tela de um iPhone 8 (375×667)
- Verifica se a navbar aparece nesse tamanho

---

## 🧷 5) Comandos Úteis

### Abrir o Cypress (modo visual)
```
npx cypress open
```

### Rodar todos os testes em modo headless
```
npx cypress run
```

### Rodar um arquivo específico
```
npx cypress run --spec "cypress/e2e/home.cy.js"
```

### Scripts recomendados no `package.json`
```json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}
```

Depois disso, você pode rodar:
```
npm run cypress:open
npm run cypress:run
```

---

## 🔍 6) Dicas de Boas Práticas
- Mantenha seletores estáveis (use `data-testid` quando possível)
- Separe testes por componente ou página
- Deixe cada teste independente usando `beforeEach()`
- Use textos exatos para evitar falsos negativos

---

## ❗ 7) Problemas Comuns
| Problema | Solução |
|---------|----------|
| Cypress não abre | Verifique Node e npm / reinstale dependências |
| Teste não aparece no Cypress | Garanta que o arquivo está em `cypress/e2e` |
| Teste falha por texto diferente | Compare com o texto exato do HTML |
| Página não carrega | Certifique‑se de que `home.html` está no caminho correto |

---

## ✅ 8) Conclusão
Este README resume todo o processo de criação, execução e entendimento dos testes E2E para a página **Home** usando Cypress. Ele documenta exatamente os passos usados na sua experiência e explica o que cada teste garante na interface.

Se quiser, posso gerar também:
- um README mais curto
- um README mais técnico
- um README em inglês
- ou configurar testes de outras páginas.
# README — Testes E2E com Cypress (Tela de Cadastro)

Este documento explica como funcionam os testes automatizados para a **Tela de Cadastro**, como executá-los e o que cada teste valida. O guia segue o mesmo estilo do README anterior, mantendo organização, clareza e explicações completas.

---

## 📌 1) Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (versão LTS)
- **npm** (vem junto com o Node)
- **Google Chrome** ou outro navegador suportado pelo Cypress

---

## 📁 2) Estrutura do Projeto
```
/meu-projeto
  ├─ cypress/
  │   ├─ e2e/
  │   │   └─ cadastro.cy.js
  ├─ cadastro.html
  ├─ package.json
  └─ README.md
```

O arquivo `cadastro.cy.js` deve ficar dentro da pasta `cypress/e2e`.

---

## ▶️ 3) Como Executar os Testes

### **1️⃣ Abra a pasta do projeto**
Navegue até a pasta onde está o arquivo `cadastro.html`.

### **2️⃣ Na barra de endereço da pasta, escreva `cmd` e pressione ENTER**
Isso abre o terminal exatamente dentro da pasta.

### **3️⃣ Inicialize o projeto Node**
```
npm init -y
```

### **4️⃣ Instale o Cypress**
```
npm install cypress --save-dev
```

### **5️⃣ Abra a interface gráfica do Cypress**
```
npx cypress open
```

### **6️⃣ Clique em *Continuar***

### **7️⃣ Escolha o navegador (Chrome, Edge, etc.)**

### **8️⃣ Clique no arquivo `cadastro.cy.js` para iniciar os testes**

---

## 🧪 4) O que os Testes Verificam (Explicação completa)
O arquivo `cadastro.cy.js` foi criado para validar o fluxo e as regras de negócio da tela de cadastro de usuários.

### ✔ 1. Exibição de todos os campos obrigatórios
O teste verifica se todos os elementos essenciais estão visíveis:
- Campo **Nome**
- Campo **Email**
- Campo **Senha**
- Campo **Confirmar Senha**
- Botão **Cadastrar**

### ✔ 2. Senhas diferentes devem bloquear o cadastro
O teste valida:
- Preenchimento dos campos
- Senhas não coincidem
- Exibição da mensagem: **"As senhas não coincidem!"**

### ✔ 3. Senha fraca deve gerar erro
Verifica se o sistema impede o cadastro quando a senha:
- É muito curta
- Não atende aos requisitos mínimos

Mensagem esperada:
- **"A senha deve ter pelo menos 8 caracteres"**

### ✔ 4. Cadastro bem-sucedido
O teste realiza o fluxo completo:
- Preenche campos válidos
- Senhas iguais e fortes
- Clica em **Cadastrar**
- Confirma o alerta: **"Cadastro realizado com sucesso!"**
- Verifica o redirecionamento para `login.html`

Este é o teste principal do fluxo.

---

## 🧷 5) Comandos Úteis

### Abrir o Cypress (modo visual):
```
npx cypress open
```

### Rodar todos os testes sem interface (headless):
```
npx cypress run
```

### Rodar somente o teste de cadastro:
```
npx cypress run --spec "cypress/e2e/cadastro.cy.js"
```

### Scripts recomendados no `package.json`:
```json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}
```

Depois disso, você pode rodar:
```
npm run cypress:open
npm run cypress:run
```

---

## 🔍 6) Dicas e Boas Práticas
- Utilize IDs ou atributos `data-testid` para seletores mais consistentes.
- Não misture vários fluxos em um único teste.
- Mantenha mensagens de erro claras e padronizadas.
- Use `beforeEach` para garantir que cada teste inicie com a página limpa.

---

## ❗ 7) Possíveis Problemas e Soluções
| Problema | Solução |
|---------|---------|
| Campos não encontrados | Verifique IDs no HTML |
| Mensagens não aparecem | Confirme lógica JS que valida cadastro |
| Alerta não aparece | Verifique `window.alert` no arquivo JS |
| Não redireciona | Cheque se o código HTML/JS faz o `window.location.href` |

---

## ✅ 8) Conclusão
Este README documenta de forma clara:
- Como configurar e rodar o Cypress
- Como executar os testes da tela de cadastro
- O que cada teste está validando
- Boas práticas e soluções para erros comuns

