import { Sequelize } from 'sequelize';
import createUsersModel from './user.model.js';
import createHistoriesModel from './history.model.js';
import * as config from '../config.js';


let db = {};

//CONNECTING
db.sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {
  host: 'localhost',
  dialect: 'postgres',
  logging: !config.IS_PRODUCTION
});
db.sequelize.authenticate()
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch(() => console.log("CONNECTION FAILED"));

//MODELING
db.users = createUsersModel(db.sequelize, Sequelize);
db.histories = createHistoriesModel(db.sequelize, Sequelize);

//RELATIONSHIP MAPPING
db.users.histories = db.users.hasMany(db.histories);
db.histories.users = db.histories.belongsTo(db.users);

export default db;