const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'sf5g9f',
  e2e: {
    pageLoadTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})