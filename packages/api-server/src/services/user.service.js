import db from '../models/core.js';

export default class UserService {
  static async createNewUser (username, password) {
    const res = await db.users.create({ username, password });
    return res;
  }
}
