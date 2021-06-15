import jwt from 'jsonwebtoken';
import * as config from '../config.js';

export default function generateToken (user) {
  const jwtData = {
    id: user.id,
    username: user.username
  };
  const token = jwt.sign(jwtData, config.jwtSecret, { expiresIn: config.tokenExpirationTime });
  if (!token) throw (Error("error while generating token"));
  return token;
}
