'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '16 Buckalow Ln',
        city: 'Kansas City',
        state: 'Texas',
        country: 'United States of America',
        lat: 37.7645358,
        lng: -122.4730327,
        name: 'Las Brisas',
        price: 123,
        previewImage:
          'https://www.pexels.com/photo/famous-high-metal-tower-illuminating-at-night-4577368/',
        description:
          `The place to be. You will feel like in heaven`
      },
      {
        ownerId: 1,
        address: '16 Buckalow Ln',
        city: 'Kansas City',
        state: 'Texas',
        country: 'United States of America',
        lat: 37.7645358,
        lng: -122.4730327,
        name: 'Las Brisas',
        price: 123,
        previewImage:
          'https://www.pexels.com/photo/famous-high-metal-tower-illuminating-at-night-4577368/',
        description:
          `The place to be. You will feel like in heaven`
      },
      {
        ownerId: 1,
        address: '16 Buckalow Ln',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States of America',
        lat: 37.7645358,
        lng: -122.4730327,
        name: 'Las Brisas',
        price: 123,
        previewImage:
          'https://www.pexels.com/photo/famous-high-metal-tower-illuminating-at-night-4577368/',
        description:
          `The place to be. You will feel like in heaven`
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options);
  }
};
