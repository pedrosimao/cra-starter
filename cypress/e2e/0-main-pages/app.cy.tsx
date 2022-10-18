describe('Home page test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('It should display "Hello Vite" ', () => {
    cy.contains('Hello Vite')
    // Cypress Testing Library Syntax
    cy.findAllByText('count: 0').should('exist')
    cy.findAllByText('count: 0').click().click()
    cy.findAllByText('count: 2').should('exist').should('exist')
  })
})
