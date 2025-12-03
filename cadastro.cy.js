describe('Tela de Cadastro', () => {

  beforeEach(() => {
    cy.visit('cadastro.html');
  });

  it('Deve exibir todos os campos da tela de cadastro', () => {
    cy.get('#nome').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#senha').should('be.visible');
    cy.get('#confirmarSenha').should('be.visible');
    cy.contains('button', 'Cadastrar').should('be.visible');
  });

  it('Deve impedir cadastro se as senhas forem diferentes', () => {
    cy.get('#nome').type('Vitor');
    cy.get('#email').type('vitor@email.com');
    cy.get('#senha').type('Senai2025!');
    cy.get('#confirmarSenha').type('Senai2024!');
    cy.contains('button', 'Cadastrar').click();

    cy.get('#erro').should('contain', 'As senhas não coincidem!');
  });

  it('Deve impedir cadastro se a senha for fraca', () => {
    cy.get('#nome').type('Vitor');
    cy.get('#email').type('vitor@email.com');
    cy.get('#senha').type('abc123');
    cy.get('#confirmarSenha').type('abc123');
    cy.contains('button', 'Cadastrar').click();

    cy.get('#erro').should('contain', 'A senha deve ter pelo menos 8 caracteres');
  });

  it('Deve cadastrar com sucesso e redirecionar para login.html', () => {

    cy.get('#nome').type('Vitor');
    cy.get('#email').type('vitor@email.com');
    cy.get('#senha').type('SenhaForte1!');
    cy.get('#confirmarSenha').type('SenhaForte1!');
    cy.contains('button', 'Cadastrar').click();

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Cadastro realizado com sucesso!');
    });

    cy.url().should('include', 'login.html');
  });

});
