import * as service from '../services/index.js';
import db from '../models/core.js';
import jwt from 'jsonwebtoken';
import * as config from '../config.js';

export async function login(req, res){
    const {username, password} = req.body;
    const user = await service.AuthenticateService.getUserByNameAndPassword(username, password);
    if(!user){
        res.status(200).send("Failed");
        return;
    }
    
    const jwtData = {
        id: user.id,
        username: user.username
    }

    const token = jwt.sign(jwtData, config.jwtSecret, {expiresIn: config.tokenExpirationTime});//in second
    
    res.cookie('token', token, config.cookieOptions);
    res.status(200).send(user.username);
}