'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.hasMany(
        models.Review,
        {foreignKey: 'spotId'}
      ),
      Spot.hasMany(
        models.Booking,
        {foreignKey: 'spotId'}
      ),
      Spot.hasMany(
        models.SpotsImage,
        {foreignKey: 'spotId'}
      ),
      Spot.belongsTo(
        models.User,
        {foreignKey: 'ownerId'}
      )
      

    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
    type: DataTypes.STRING,
    allowNull: false
  },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lat:{
      type: DataTypes.DECIMAL,
    },
    lng: {
      type: DataTypes.DECIMAL,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,50], 
      }
    }, 
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    previewImage: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};