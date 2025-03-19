/// <reference types="cypress" />

describe('Add to Cart Feature', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays Product Cards', () => {
    cy.get('[data-testid^="product-card-"]').should('be.visible');
  });

  it('check errors adding to cart', () => {
    const productCard = cy.get('[data-testid^="product-card-"]').first();

    productCard.within(() => {
      const addToCartBtn = cy.get('[data-testid="product-card-add-to-cart"]');
      addToCartBtn.should('be.visible');
      addToCartBtn.click();

      cy.get('[data-testid="product-parameter-error"]').should(
        'have.text',
        'Select size'
      );
    });
  });

  it('can add to cart', () => {
    // Sign in to be able to add products to cart
    cy.visit('http://localhost:3000/sign-in');

    cy.get('form').should('be.visible');
    cy.get('input[name="email"]').type(Cypress.env('email'));
    cy.get('input[name="password"]').type(Cypress.env('password'));

    cy.get('form').submit();
    cy.url().should('include', '/');

    const productCard = cy.get('[data-testid^="product-card-"]').first();

    productCard
      .within(() => {
        const sizeToggler = cy.get('[data-testid="size-toggler"] > button');
        sizeToggler.click();

        const sizeSelector = cy.get('[data-testid="size-selector"]');
        sizeSelector.should('be.visible');
        sizeSelector.contains('M').click();

        const addToCartBtn = cy.get('[data-testid="product-card-add-to-cart"]');
        addToCartBtn.should('be.visible');
        addToCartBtn.click();
      })
      .then(() => {
        cy.get('.Toastify__toast').should('be.visible');
      });
  });
});
