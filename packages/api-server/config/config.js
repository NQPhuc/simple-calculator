// import * as config from '../src/config.js';
require("@babel/register");

const config = require('../src/config.js');

module.exports = {
  development: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    dialect: 'postgres',
    logging: false
  },
};
