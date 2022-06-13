describe('Google Search', () => {
  it('enter a "cypress" term and press enter', () => {
    cy.visit('https://www.google.com')
    cy.get('.gLFyf')
      .type('cypress')
      .type('{enter}');
    cy.get('#result-stats').should('contain', 'Aproximadamente');
  });
});