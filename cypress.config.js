const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080, 
  viewportWidth: 1920,
  e2e: {
   supportFile: false
  },
  chromeWebSecurity: false,
  env: {
    baseUrl: "https://www.booking.com/"
  }
});
