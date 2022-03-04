/* eslint-disable no-undef */
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000/'],
      /* Add configuration here */
    },
    upload: {
      target: 'temporary-public-storage',
      /* Add configuration here */
    },
  },
}
