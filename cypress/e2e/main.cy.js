describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept(
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OVAGeCoI4G285YyTXNDwGpYOsV0H55eA',
      { fixture: 'home.json' }
    )
    cy.visit('http://localhost:3000/')
  })

  it('have a header showing the name of the application', () => {
    cy.contains('NOOZ')
  })

  it('should have a header image', () => {
    cy.get('.header-photo')
      .should('have.css', 'background-image')

    cy.get('.header-photo').should('be.visible')
  })

  it('should show three article cards', () => {
    cy.get('.single-news-card').should('have.length', 3)

    cy.get('.single-news-card').first().contains('The West Tried to Isolate Russia. It Didn’t Work')
    cy.get('.single-news-card').eq(1).contains('Bulgarian Factories and Secret Task Forces: How the West Hunts for Soviet Arms')
    cy.get('.single-news-card').last().contains('Yellen Calls for More Ukraine Support and Warns China Against Helping Russia')
  })

  it('should be able to open a modal', () => {
    cy.get('.single-news-card').first().click()
    cy.get('.modal').should('be.visible')
  })
})