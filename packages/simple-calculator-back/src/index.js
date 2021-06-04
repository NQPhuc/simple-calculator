import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './models/core.js';


import {FEAddress, IS_PRODUCTION} from './config.js';

const app = express();
const port = process.env.PORT || 3030;

let corsOptions = {
    origin: FEAddress,
    //origin: "*", //doesn't work with cookies in browser
    credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.use(cors(corsOptions));


/*
app.use('/auth', authRoute);
app.use('/product', productRoute);
app.use('/user', userRoute);
app.use('/order', orderRoute);
*/

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
