export const IS_PRODUCTION = process.env.NODE_ENV == 'production';

export const backendAddress = IS_PRODUCTION ? process.env.BE_ADDRESS_PRODUCTION : process.env.BE_ADDRESS_DEV;