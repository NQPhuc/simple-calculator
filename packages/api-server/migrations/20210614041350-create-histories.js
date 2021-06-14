module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Histories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    operand1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    operand2: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    operator: {
      type: Sequelize.STRING(1),
      allowNull: false
    },
    result: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('Histories')
};
