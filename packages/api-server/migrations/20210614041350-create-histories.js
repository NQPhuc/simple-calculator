module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Histories', {
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
  }),

  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
  }
};
