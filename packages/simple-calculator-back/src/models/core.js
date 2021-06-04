import {Sequelize} from 'sequelize';
import createUsersModel from './user.model.js';
import createHistoriesModel from './history.model.js';


let db = {};

//CONNECTING
db.sequelize = new Sequelize('simple-calculator', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
  });
db.sequelize.authenticate()
    .then(() => console.log("CONNECTED TO DATABASE"))
    .catch(() => console.log("CONNECTION FAILED"));

//MODELING
db.users = createUsersModel(db.sequelize, Sequelize);
db.histories = createHistoriesModel(db.sequelize, Sequelize);

//RELATIONSHIP MAPPING
db.users.hasMany(db.histories);
db.histories.belongsTo(db.users);


(async () => {
  await db.sequelize.sync({ force: true });
  // Code here
})();

export default db;