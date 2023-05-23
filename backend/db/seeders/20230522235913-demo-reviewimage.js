'use strict';

let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA // define your schema in options object
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'ReviewImages'

    return queryInterface.bulkInsert(options, [
      {
        url: "https://www.pexels.com/photo/famous-high-metal-tower-illuminating-at-night-4577368/",
        reviewId: 1
      },
         {
        url: "https://www.pexels.com/photo/famous-high-metal-tower-illuminating-at-night-4577368/",
        reviewId: 2
      },
         {
        url: "https://www.pexels.com/photo/famous-high-metal-tower-illuminating-at-night-4577368/",
        reviewId: 3
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options);
  }
};
