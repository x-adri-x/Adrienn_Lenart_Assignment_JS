describe('A-Z Widget test', () => {
    [
        'https://www.unibet.co.uk/sportsbook-feeds/views/sports/a-z',
        'https://www.unibet.se/sportsbook-feeds/views/sports/a-z',
        'https://www.unibet.com/sportsbook-feeds/views/sports/a-z'
    ].forEach((url) => {
        it('Should have the right attributes', () => {
            cy.request(url)
            .then(res => res.body.layout.sections[1].widgets[0].sports)
            .each((sport) => {
               expect(sport.name).to.match(/[\w\s]+/)
               expect(sport.boCount).to.match(/[0-9]+/)
               expect(sport.iconUrl).to.match(/(http|https):\/\/.+(.svg|png)$/)
            })
        })
    })
})