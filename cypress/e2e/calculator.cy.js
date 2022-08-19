describe("Calculator", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('Do the number buttons update the display of the running total?', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Do the arithmetical operations update the display with the result of the operation?', () => {
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12')
  })

  it('Can chain multiple operations together', () => {
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('Can display decimal numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  it('Can display large numbers', () => {
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '50000')
  })

  it('Can handle unusual circumstances ( dividing by 0 )', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })


})



// 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).