import db from '../models/core.js';

export default class HistoryService{
    static async appendHistory(userId, operand1, operand2, operator, result){
        const res = await db.histories.create({
            operand1: operand1,
            operand2: operand2,
            operator: operator,
            result: result,
            userId: userId
        });
        return res;
    }

    static async getAllHistoryOfUser(uid){
        const res = await db.users.findByPk(uid, {include: db.histories})
        console.log(res);
        return res;
    }
}