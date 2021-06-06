//import dotenv from 'dotenv';
//dotenv.config();

export const IS_PRODUCTION = process.env.NODE_ENV == 'production';

export const backendAddress = IS_PRODUCTION ? process.env.VUE_APP_BE_ADDRESS_PRODUCTION : process.env.VUE_APP_BE_ADDRESS_DEV;