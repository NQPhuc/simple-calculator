import jwt from 'jsonwebtoken';
import * as config from '../config.js';

export default function generateToken (jwtData) {
  const token = jwt.sign(jwtData, config.jwtSecret, { expiresIn: config.tokenExpirationTime });
  if (!token) throw (Error("error while generating token"));
  return token;
}
