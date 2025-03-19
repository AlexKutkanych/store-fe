/// <reference types="cypress" />

describe('Sign-In Feature', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sign-in');
  });

  it('displays the sign-in form', () => {
    cy.get('form').should('be.visible');
  });

  it('can fill out and submit the sign-in form', () => {
    cy.get('input[name="email"]').type(Cypress.env('email'));
    cy.get('input[name="password"]').type(Cypress.env('password'));

    cy.get('form').submit();

    cy.url().should('include', '/');
  });

  it('shows validation errors for invalid inputs', () => {
    cy.get('form > button').click();

    cy.get('[data-testid="sign-in-email"] > span').should(
      'contain',
      'Please enter a valid email address.'
    );
    cy.get('[data-testid="sign-in-password"] > span').should(
      'contain',
      'Password must be at least 6 characters long.'
    );
  });

  it('shows an error message for an incorrect email', () => {
    cy.get('input[name="email"]').type('random@user.ccc');
    cy.get('input[name="password"]').type(Cypress.env('password'));

    cy.get('form').submit();

    cy.get('#sign-in-error').should('contain', 'Incorrect email!');
  });

  it('shows an error message for an incorrect password', () => {
    cy.get('input[name="email"]').type(Cypress.env('email'));
    cy.get('input[name="password"]').type('test1234');

    cy.get('form').submit();

    cy.get('#sign-in-error').should('contain', 'Incorrect password!');
  });

  it('should redirect to sign up page', () => {
    cy.get('a[data-testid="sign-in-redirect"]').click();
    cy.url().should('include', '/sign-up');
  });
});
