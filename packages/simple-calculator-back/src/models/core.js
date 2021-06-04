import {Sequelize} from 'sequelize';
import createUsersModel from './user.model.js';

/**
 * TEMP DATABASE FOR TESTING
 */
// Option 2: Passing parameters separately (other dialects)
let db = {};

db.sequelize = new Sequelize('simple-calculator', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
  });

db.sequelize.authenticate()
    .then(() => console.log("CONNECTED TO DATABASE"))
    .catch(() => console.log("CONNECTION FAILED"));

db.users = createUsersModel(db.sequelize, Sequelize);

(async () => {
  await db.sequelize.sync({ force: true });
  // Code here
})();

export default db;