const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "1bvgnw",
  viewportHeight: 880,
  viewportWidth: 1440,
  //configuracion entre 0 y 51 donde el valor mas alto es mala calidad
  videoCompression: 51,
  //Deshabilita el acceso a video
  video: false,
  //tiempo de espera de carga de pagina
  pageLoadTimeout: 60000,
  //espera implicita - proporciona el tiempo de espera para cada paso de prueba
  defaultCommandTimeout: 6000,
  //realizar reintentos cuando una prueba falla
  retries: {
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
