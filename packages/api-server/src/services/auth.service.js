import db from '../models/core.js';
import bcrypt from 'bcrypt';
import * as config from '../config.js';
import jwt from 'jsonwebtoken';

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
    static async getUserDataByToken(token){
        if(!token) return null;
        try{
            const data = jwt.verify(token, config.jwtSecret);
            console.log(data);
            return data;
        }
        catch(e){
            console.log(e);
            return null;
        }
    }
}
