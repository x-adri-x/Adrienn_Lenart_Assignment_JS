describe('Test kambi-rest-api/gameLauncher2 HTTP request', () => {
  it('Should return HTTP 200 response', () => {
    let url = new URL('https://www.unibet.co.uk/kambi-rest-api/gameLauncher2.json?brand=unibet&locale=en_GB')
    cy.request('GET', url.href).then(res => {
      expect(res.status).to.eq(200)
    })
  })

  it('Should have the right parameters', () => {
    cy.intercept('/kambi-rest-api/gameLauncher2.json**').as('gameLauncher')
    cy.visit('https://www.unibet.co.uk/betting/sports/home')
    cy.wait('@gameLauncher').then(obj => {
        expect(obj.request.url).to.include('brand')
        expect(obj.request.url).to.include('locale')
    })
  })

  it('Should have correct data', () => {
    cy.intercept('/kambi-rest-api/gameLauncher2.json**').as('gameLauncher')
    cy.visit('https://www.unibet.co.uk/betting/sports/home')
    cy.wait('@gameLauncher').then(obj => {
      expect(obj.response.body).to.have.property('endpointUrl', 'https://static.kambicdn.com')
      expect(obj.response.body).to.have.property('javascriptUrl', 'https://static.kambicdn.com/client/ubuk/kambi-bootstrap.js?breakcache=true')
      expect(obj.response.body).to.have.property('authtoken', '')
      expect(obj.response.body).to.have.property('playerId', '')
      expect(obj.response.body).to.have.property('streamingEnabled', false)
      expect(obj.response.body).to.have.property('currency', 'GBP')
      expect(obj.response.body).to.have.property('country', null)
      expect(obj.response.body).to.have.property('jurisdiction', 'uk')
      expect(obj.response.body).to.have.property('racingMode', false)
      expect(obj.response.body).to.have.property('market', 'GB')
      expect(obj.response.body).to.have.property('lang', 'en_GB')
      expect(obj.response.body).to.have.property('kambiClientApiUrl', 'https://static.kambicdn.com/client/widget-api/1.0.0.181/kambi-widget-api.js')
      expect(obj.response.body).to.have.property('kambiOfferingApiBaseUrl', 'https://eu-offering.kambicdn.org/offering/')
      expect(obj.response.body).to.have.property('kambiClientApiUrl', 'https://static.kambicdn.com/client/widget-api/1.0.0.181/kambi-widget-api.js')
      expect(obj.response.body).to.have.property('offering', 'ubuk')
      expect(obj.response.body).to.have.property('kambiPlayerApiBaseURL', 'https://al-auth.kambicdn.org/player')
      expect(obj.response.body).to.have.property('kambiSettingsApiBaseUrl', 'https://settings-api.kambicdn.com')
      expect(obj.response.body).to.have.property('kambiPushWSUrl', 'wss://push.aws.kambicdn.com')
    })
  })
})