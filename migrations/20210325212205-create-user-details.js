"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("UserDetails", {
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
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("UserDetails");
  },
};
