describe('Automation Practice', () => {

  it('Checks for the initial state', () => {
    cy.visit('https://automationexercise.com/');
    cy.percySnapshot();
  });
});
