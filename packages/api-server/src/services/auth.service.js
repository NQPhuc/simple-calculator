import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models/core.js';
import * as config from '../config.js';

export default class AuthenticateService {
  static async getUserByNameAndPassword (username, plainpassword) {
    const user = await db.users.findOne({
      where: {
        username,
      },
    });
    if (!user) return null;

    const isSamePass = await bcrypt.compare(plainpassword, user.password);
    if (!isSamePass) return null;

    return user;
  }

  static async getUserDataByToken (token) {
    if (!token) return null;
    try {
      const data = jwt.verify(token, config.jwtSecret);
      return data;
    } catch (e) {
      return null;
    }
  }
}
