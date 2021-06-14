module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }),

  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
  }
};
