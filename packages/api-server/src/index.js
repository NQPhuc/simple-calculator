import express from "express";

import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';
import { FEAddress, IS_PRODUCTION } from './config.js';
import db from './models/core.js';

const app = express();
const port = process.env.PORT || process.env.DEV_PORT || 3030;

const corsOptions = {
  origin: FEAddress,
  credentials: true,
};

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.use(cors(corsOptions));

/* (async () => {
  await db.sequelize.sync({force: true});
})(); */ 

routes(app);

app.get('/', (req, res) => {
  res.send(
    `Port: ${port}\n`
    + `IS_PRODUCTION: ${IS_PRODUCTION}\n`
    + `FE_ADD: ${FEAddress}\n`
  );
});

app.use((err, req, res, next) => {
  if (err.status === 500 || typeof err.status === 'undefined') {
    res.status(500).json({
      error: {
        name: 'InteralServerError',
        message: 'Internal Server Error',
      },
    });
  } else {
    res.status(err.status).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
});

app.listen(port, () => {
  // I know there will be eslint warning, but I don't have other ways to log the result
  console.log(`Example app listening at http://localhost:${port}`);
});
