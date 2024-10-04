const { QueryInterface, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Characters', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      affiliation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      homeworldId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Planets',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Characters');
  },
};