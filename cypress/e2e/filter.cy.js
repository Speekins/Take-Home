describe('Filter and search functionality', () => {
  beforeEach(() => {
    cy.intercept(
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OVAGeCoI4G285YyTXNDwGpYOsV0H55eA',
      { fixture: 'home.json' }
    )
    cy.visit('http://localhost:3000')
  })

  it('should be able to filter by news section', () => {
    cy.intercept(
      'https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=OVAGeCoI4G285YyTXNDwGpYOsV0H55eA',
      { fixture: 'movies.json' }
    )
    cy.get('.filter').select('movies')

    cy.get('.single-news-card').should('have.length', 3)

    cy.get('.single-news-card').first().contains("Oscar-Nominated, but Hong Chau Hopes to Stay an Underdog")
    cy.get('.single-news-card').eq(1).contains("Film Artists Reflect on the Movies that Left a Mark")
    cy.get('.single-news-card').last().contains("Youth in Revolt")
  })

  it('should be able to search the current results', () => {
    cy.get('.search').type('bulgaria')

    cy.get('.search').should('have.attr', 'value', 'bulgaria')
    cy.get('.single-news-card').should('have.length', 1)
    cy.get('.single-news-card').first().contains('Bulgarian Factories and Secret Task Forces: How the West Hunts for Soviet Arms')
  })

  it('should be able to delete term from search field and all article cards return', () => {
    cy.get('.search').type('bulgaria')
    cy.get('.search').clear()

    cy.get('.search').should('have.attr', 'value', '')

    cy.get('.single-news-card').should('have.length', 3)

    cy.get('.single-news-card').first().contains('The West Tried to Isolate Russia. It Didn’t Work')
    cy.get('.single-news-card').eq(1).contains('Bulgarian Factories and Secret Task Forces: How the West Hunts for Soviet Arms')
    cy.get('.single-news-card').last().contains('Yellen Calls for More Ukraine Support and Warns China Against Helping Russia')
  })
})