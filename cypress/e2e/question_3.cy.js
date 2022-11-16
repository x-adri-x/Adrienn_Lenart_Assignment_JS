describe('Registration user interaction', () => {
    it('Page title should equal "Join the club"', () => {
        cy.visit('https://www.unibet.co.uk/registration')
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
        cy.get('.css-n0bual').should('have.text','Join the club')
      })

      it('At least one promotion should be available', () => {
        cy.get('[data-kmf="welcome-bonus-offer"]')
        .find('[data-dn="VerticalStack"]').children('[data-dn="bonus-offer"]')
        .should('have.length.of.at.least', 1)
      })

      it('1st promotion should be selected', () => {
         cy.get('[data-kmf="welcome-bonus-offer"]')
        .find('[data-dn="VerticalStack"]').children('[data-dn="bonus-offer"]')
        .first()
        .within(() => cy.contains('Selected'))
      })

      it('I want this Offer” button should be available and in correct colour', () => {
        cy.get('[data-test-name="submit-button"]').then(el => {
            expect(el).to.be.enabled
            expect(el).to.have.css('background-color', 'rgb(255, 231, 31)')
        })
      })

      it('Registration form should be visible after clicking "Skip" on the page', () => {
        cy.get('[data-test-name="skip-welcome-bonus-offer-link"]').click()
        cy.get('form').should('be.visible')
      })

      it('Step 1 should be marked in Green', () => {
        cy.get('[data-test-name="progress-bar-bubble"]').contains('1')
        .should('have.css', 'background-color','rgb(0, 83, 29)')
      })

      it('All fields and drop-down selections should be visible', () => {
        cy.get('[data-test-name="firstName-input-field"]').should('be.visible')
        cy.get('[data-test-name="lastName-input-field"]').should('be.visible')
        cy.get('[data-test-name="email-input-field"]').should('be.visible')
        cy.get('[data-test-name="password-input-field"]').should('be.visible')
        cy.get('[data-test-name="dropdown-dateVal"]').should('be.visible')
        cy.get('[data-test-name="dropdown-monthVal"]').should('be.visible')
        cy.get('[data-test-name="dropdown-yearVal"]').should('be.visible')
        cy.get('[data-test-name="gender-drop-down"]').should('be.visible')
      })

      it('The "Continue" button should be greyed out and not clickable', () => {
        cy.get('[data-test-name="submit-button"]').should('have.css', 'color', 'rgb(17, 17, 17)')
        .and('be.disabled')
      })

      it('Email field should be validated', () => {
        cy.get('[data-test-name="email-input-field"]').should('have.attr', 'type', 'email')
        .and('have.attr', 'name', 'email')
        .and('be.enabled')
        .and('not.have.value')
        .and('not.be.focused')
      })

      it('Form should be filled', () => {
        const DATE = new Date()
        cy.get('[data-test-name="firstName-input-field"]').type('Test')
        cy.get('[data-test-name="lastName-input-field"]').type('Test')
        cy.get('[data-test-name="email-input-field"]').type('testing@testing.com')
        cy.get('[data-test-name="password-input-field"]').type('BrownRicePudding3.')
        cy.get('[data-test-name="dropdown-dateVal"]').last().select(DATE.getDate() - 1)
        cy.get('[data-test-name="dropdown-monthVal"]').last().select(DATE.getMonth())
        cy.get('[data-test-name="dropdown-yearVal"]').last().select((DATE.getFullYear() - 18).toString())
        cy.get('[data-test-name="gender-drop-down"]').last().select('Male')
      })

      it('The "Continue" button should be clicked', () => {
        cy.get('[data-test-name="submit-button"]').click()
      })

      it('Registration form with Step 1 completed should be visible', () => {
        cy.get('form').should('be.visible')
        cy.get('[data-test-name="progress-bar-bubble"]').contains('2')
        .should('have.css', 'background-color','rgb(0, 83, 29)')
        cy.get('[data-test-name="progress-bar-bubble-success"]').should('have.attr', 'data-dn','Icon')
        .and('have.attr', 'type', 'success')
      })

      it('The "Join" button should be greyed out', () => {
        cy.get('[data-test-name="submit-button"]').should('be.disabled')
        .and('have.css', 'color', 'rgb(17, 17, 17)')
      })
  })