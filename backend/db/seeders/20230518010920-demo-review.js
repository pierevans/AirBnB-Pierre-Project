'use strict';

let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews'

    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        spotId: 1,
        review: 'good',
        stars: 5
      },
      {
        userId: 1,
        spotId: 2,
        review: 'good',
        stars: 5
      },
      {
        userId: 1,
        spotId: 3,
        review: 'good',
        stars: 5
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews'
    return queryInterface.bulkDelete(
      options)
  }
}
