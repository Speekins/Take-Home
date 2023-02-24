describe('modal', () => {
  beforeEach(() => {
    cy.intercept(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OVAGeCoI4G285YyTXNDwGpYOsV0H55eA`,
      { fixture: 'home.json' }
    )
    cy.visit('http://localhost:3000')
    cy.get('.single-news-card').first().click()
  })

  it('should be able to open modal', () => {
    cy.get('.modal').should('be.visible')
  })

  it('should show the article title', () => {
    cy.get('.modal-header').contains('The West Tried to Isolate Russia')
  })

  it('should show the authors of the article', () => {
    cy.get('p').first().contains('By: Josh Holder, Lauren Leatherby, Anton Troianovski and Weiyi Cai')
  })

  it('should display the published date of the article', () => {
    cy.get('p').eq(1).contains('Published: Tue Feb 21 2023')
  })

  it('should display the article abstract', () => {
    cy.get('p').eq(2).contains('The West never won over as much of the world as it initially seemed. Here’s how Russia is taking advantage of a fragmented world.')
  })

  it('should show the article feature image', () => {
    cy.get('img').should('have.attr', 'src', "https://static01.nyt.com/images/2023/02/23/world/russia-ukraine-geopolitics-promo/russia-ukraine-geopolitics-promo-superJumbo-v5.png")
  })
  
  it('should direct user out of app to article url', () => {
    cy.get('a').should('have.attr', 'href', "https://www.nytimes.com/interactive/2023/02/23/world/russia-ukraine-geopolitics.html")
  })

  it('should close the modal when exit button is clicked', () => {
    cy.get('.close-modal').click()

    cy.get('.modal').should('not.exist')
  })

})