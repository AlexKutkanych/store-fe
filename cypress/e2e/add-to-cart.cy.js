/// <reference types="cypress" />

describe('Add to Cart Feature', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays Product Cards', () => {
    cy.get('[data-testid^="product-card-"]').should('be.visible');
  });

  it('can add to cart', () => {
    const productCard = cy.get('[data-testid^="product-card-"]').first();

    productCard.within(() => {
      const sizeToggler = cy.get(
        '[data-testid="size-toggler"] > button'
      );
      console.log(sizeToggler, 'prd');
      sizeToggler.click();
  
      const sizeSelector = cy.get('[data-testid="size-selector"]');
      sizeSelector.should('be.visible');
      sizeSelector.contains('M').click();
  
      const addToCartBtn = cy.get(
        '[data-testid="product-card-add-to-cart"]'
      );
      addToCartBtn.should('be.visible');
      addToCartBtn.click();
      // TODO: check in localstorage
      console.log(window.localStorage)
    })
  });

  it('check errors adding to cart', () => {
    const productCard = cy.get('[data-testid^="product-card-"]').first();

    productCard.within(() => {
      const addToCartBtn = cy.get(
        '[data-testid="product-card-add-to-cart"]'
      );
      addToCartBtn.should('be.visible');
      addToCartBtn.click();

      cy.get('[data-testid="product-parameter-error"]').should('have.text', 'Select size')
    })
  });
});
