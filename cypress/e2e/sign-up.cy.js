/// <reference types="cypress" />

describe('Sign-Up Feature', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sign-up');
  });

  it('displays the sign-up form', () => {
    cy.get('form').should('be.visible');
  });

  it('can fill out and submit the sign-up form', () => {
    cy.get('input[name="email"]').type(Cypress.env('email'));
    cy.get('input[name="phone"]').type(Cypress.env('phone'));
    cy.get('input[name="password"]').type(Cypress.env('password'));
    cy.get('input[name="acceptOffers"] + span').click();

    cy.get('form').submit();

    cy.url().should('include', '/');
  });

  it('shows validation errors for invalid inputs', () => {
    cy.get('form > button').click();

    cy.get('[data-testid="sign-up-email"] > span').should(
      'contain',
      'Please enter a valid email address.'
    );
    cy.get('[data-testid="sign-up-password"] > span').should(
      'contain',
      'Password must be at least 6 characters long.'
    );
    cy.get('[data-testid="sign-up-phone"] > span').should('contain', 'Please enter a phone number.');
  });

  it('shows an error message for an existing email', () => {
    cy.get('input[name="email"]').type(Cypress.env('email'));
    cy.get('input[name="phone"]').type(Cypress.env('phone'));
    cy.get('input[name="password"]').type(Cypress.env('password'));

    cy.get('form').submit();

    cy.get('#sign-up-error').should('contain', 'This user already exists!');
  });

  it('should redirect to sign in page', () => {
    cy.get('a[data-testid="sign-up-redirect"]').click();
    cy.url().should('include', '/sign-in');
  });
});
