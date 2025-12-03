describe('Tela Home', () => {

  beforeEach(() => {
    cy.visit('home.html');
  });

  it('Deve carregar a navbar corretamente', () => {
    cy.get('nav.navbar').should('be.visible');
    cy.contains('a', 'Connext').should('be.visible');
    cy.contains('a', 'Home').should('be.visible');
    cy.contains('a', 'Login / Cadastro').should('be.visible');
  });

  it('Deve exibir o título principal da aplicação', () => {
    cy.contains('h1', 'Bem-vindo ao Connext').should('be.visible');
  });

  it('Deve exibir o texto da seção Sobre o Projeto', () => {
    cy.contains('h2', 'Sobre o Projeto').should('be.visible');
    cy.contains('p', 'O Connext é uma aplicação desenvolvida').should('be.visible');
  });

  it('Deve exibir lista de objetivos da aplicação', () => {
    cy.contains('Objetivo 1').should('be.visible');
    cy.contains('Objetivo 2').should('be.visible');
    cy.contains('Objetivo 3').should('be.visible');
    cy.contains('Objetivo 4').should('be.visible');
  });

  it('Deve exibir o footer corretamente', () => {
    cy.get('footer').should('be.visible');
    cy.contains('2025 Connext').should('be.visible');
  });

  it('Botão Login / Cadastro deve redirecionar para login.html', () => {
    cy.contains('a', 'Login / Cadastro')
      .should('have.attr', 'href', 'login.html');
  });

  it('Verifica se layout funciona em resolução mobile (responsividade)', () => {
    cy.viewport(375, 667); // iPhone 8
    cy.get('nav.navbar').should('be.visible');
  });

});
