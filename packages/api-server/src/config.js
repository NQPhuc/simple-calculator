import dotenv from 'dotenv';

dotenv.config();

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const FEAddress = IS_PRODUCTION
  ? process.env.FE_ADDRESS_PRODUCTION
  : process.env.FE_ADDRESS_DEV;

export const dbUser = process.env.DB_USERNAME;
export const dbPassword = process.env.DB_PASSWORD;
export const dbName = process.env.DB_DATABASE_NAME;
export const dbHost = process.env.DB_HOST;

export const saltRounds = process.env.SALT_ROUND ? parseInt(process.env.SALT_ROUND, 10) : 10;
export const jwtSecret = process.env.JWT_SECRET || 'abcdef';

export const tokenExpirationTime = 300;
export const cookieOptions = IS_PRODUCTION
  ? { maxAge: tokenExpirationTime * 1000, sameSite: 'None', secure: true }
  : { maxAge: tokenExpirationTime * 1000, sameSite: 'Lax', secure: false };

export const clearCookieOptions = IS_PRODUCTION
  ? { sameSite: 'None', secure: true }
  : { sameSite: 'Lax', secure: false };
