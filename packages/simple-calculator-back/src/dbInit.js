import Sequelize from 'sequelize';
import pg from 'pg';
import * as config from './config.js';



const init = (callback) => {
    let dbName = config.db_name,
        username = config.db_user,
        password = config.db_password,
        host = config.db_host;

    let pool = new pg.Pool({
        user: username,
        password: password,
        database: 'postgres',
        host: host
    });

    //var conStringPri = 'postgres://' + username + ':' + password + '@' + host + '/postgres';
    var conStringPri = "postgres://postgres:'123456'@localhost/postgres"
    var conStringPost = 'postgres://' + username + ':' + password + '@' + host + '/' + dbName;

    // connect to postgres db
    pool.connect(function(err, client, done) { 
        console.log("HERE");
        // create the db and ignore any errors, for example if it already exists.
        client.query('CREATE DATABASE "' + dbName + '"', async function(err, result) {
            //db should exist now, initialize Sequelize
            //var sequelize = new Sequelize(conStringPost);
            //callback(sequelize);
            done();
            if(err){
                console.log(err);
                console.log("DATABASE ALREADY EXIST")
            }
            else{
                console.log(result)
                console.log("CREATING DATABASE")
            }
            
            createTable()

            client.end(); // close the connection
        });
    });
};

init(null);

async function createTable(){
    const db = await import('./models/core.js')
    await db.sequelize.sync({force: true});
    console.log("SYNCH DONE. TABLE CREATED")
}




