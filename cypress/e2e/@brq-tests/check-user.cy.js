/// <reference types="cypress" />

describe('check for users', () => {
  
    it('the user tab is there', () => {
        cy.visit('http://localhost:3000')
        cy.wait(2000)
        cy.contains('button', 'User').click();
        cy.wait(2000)
        cy.get('div.MuiCardContent-root').should('exist');
    })
  
  })
  