/* eslint-disable no-undef */
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['https://samurai71.github.io/square-to-round-react-app/'],
      /* Add configuration here */
    },
    upload: {
      target: 'temporary-public-storage',
      /* Add configuration here */
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
  },
}
