'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        startDate: '2023-06-06',
        endDate: '2023-06-07'
      },
      {
        spotId: 2,
        userId: 2,
        startDate: '2023-07-07',
        endDate: '2023-07-08'
      },
      {
        spotId: 3,
        userId: 3,
        startDate: '2023-07-08',
        endDate: '2023-08-09'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options);
  }
};
