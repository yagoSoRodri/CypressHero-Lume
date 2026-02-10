/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      login: (username: string, password: string) => {};
      getByCy<E extends Node = HTMLElement>(
        cyId: string
      ): Cypress.Chainable<JQuery<E>>;
    }
  }
}

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.session(`login-${username}`, () => {
    cy.visit('/');
    cy.get('button').contains('Login').click();
    cy.get('input[type="email"]').type(username);
    cy.get('input[type="password"]').type(password);
    cy.contains('button', 'Sign in').click();
    cy.contains('button', 'Logout', { timeout: 10000 }).should('be.visible');
  });
});

Cypress.Commands.add('getByCy', (cyId: string) => {
  return cy.get(`[data-cy='${cyId}']`);
});

export { };
