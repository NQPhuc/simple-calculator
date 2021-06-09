import { FEAddress, IS_PRODUCTION } from './config.js';

import express from "express";
import routes from './routes/index.js';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './models/core.js';


const app = express();
const port = process.env.PORT || process.env.DEV_PORT || 3030;

let corsOptions = {
  origin: FEAddress,
  //origin: "*", //doesn't work with cookies in browser
  credentials: true,
};

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.use(cors(corsOptions));

(async () => {
  //await db.sequelize.sync({force: true});
  await db.sequelize.sync();
  // Code here
})();


routes(app);

app.get('/', (req, res) => {
  res.send(
    "Port: " + port + "\n" +
    "IS_PRODUCTION: " + IS_PRODUCTION + "\n" +
    "FE_ADD: " + FEAddress + "\n"
  )
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
