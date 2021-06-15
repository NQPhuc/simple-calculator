import db from '../models/core.js';

export default class HistoryService {
  static async appendHistory (userId, operand1, operand2, operator, result) {
    const res = await db.histories.create({
      operand1,
      operand2,
      operator,
      result,
      UserId: userId,
    });
    return res;
  }

  static async getAllHistoryOfUser (uid) {
    const res = await db.users.findByPk(uid, { include: db.users.histories });
    return res;
  }

  static async deleteAllHistoryOfUser (uid) {
    const res = await db.histories.destroy({ where: { UserId: uid } });
    return res;
  }
}
