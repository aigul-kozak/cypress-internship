const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ignv5z",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://telnyx.com',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
     retries: 1,
     video: true,                      // включаємо запис видео
    screenshotsFolder: 'cypress/screenshots', // папка для скриншотів
    videosFolder: 'cypress/videos', 
  },
});
