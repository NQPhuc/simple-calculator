import pg from 'pg';
import * as config from './config.js';

async function createTable () {
  const db = await import('./models/core.js');
  await db.sequelize.sync({ force: true });
}

const init = () => {
  const {
    dbName, dbUser, dbPassword, dbHost
  } = config.dbName;

  const pool = new pg.Pool({
    user: dbUser,
    password: dbPassword,
    database: 'postgres',
    host: dbHost
  });

  // connect to postgres db
  pool.connect((err, client, done) => {
    // create the db and ignore any errors, for example if it already exists.
    client.query(`CREATE DATABASE "${dbName}"`, async (err2, result) => {
      done();
      createTable();
      client.end(); // close the connection
    });
  });
};

init();
