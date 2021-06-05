import db from '../models/core.js';
import bcrypt from 'bcrypt';
import * as config from '../config.js';

export default class AuthenticateService{
    static async getUserByNameAndPassword(username, plainpassword){
        const user = await db.users.findOne({
            where: {
                username: username
            }
        });
        if(!user) return null;

        const isSamePass = await bcrypt.compare(plainpassword, user.password);
        if(!isSamePass) return null

        return user;
    }
}
