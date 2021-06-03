import dotenv from 'dotenv';
dotenv.config()

export const IS_PRODUCTION = process.env.NODE_ENV == 'production';
export const FEAddress = IS_PRODUCTION ? process.env.FE_ADDRESS_PRODUCTION : process.env.FE_ADDRESS_DEV;