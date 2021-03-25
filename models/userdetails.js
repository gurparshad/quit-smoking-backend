"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetails extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  UserDetails.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      packetCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cigarettesInPack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cigarettesEachDay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      years: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quitDate: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "UserDetails",
    },
  );
  return UserDetails;
};
