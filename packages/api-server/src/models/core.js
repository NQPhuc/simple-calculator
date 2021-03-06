import { Sequelize } from 'sequelize';
import createUsersModel from './user.model.js';
import createHistoriesModel from './history.model.js';
import * as config from '../config.js';

const db = {};

// CONNECTING
db.sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'postgres',
  logging: false, // !config.IS_PRODUCTION
});
db.sequelize.authenticate()
  // eslint-disable-next-line no-console
  .then(() => console.log("CONNECTED TO DATABASE"))
  // eslint-disable-next-line no-console
  .catch(() => console.log("CONNECTION FAILED"));

// MODELING
db.users = createUsersModel(db.sequelize, Sequelize);
db.histories = createHistoriesModel(db.sequelize, Sequelize);

// RELATIONSHIP MAPPING
db.users.histories = db.users.hasMany(db.histories);
db.histories.users = db.histories.belongsTo(db.users);

export default db;
