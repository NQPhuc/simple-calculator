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

export async function logout(req, res){
    const token = req.cookies.token;
    res.clearCookie('token', config.clearCookieOptions);
    res.status(200).send("OK");
}

export async function verify(req, res){
    const token = req.cookies.token;
    const data = await service.AuthenticateService.getUserDataByToken(token);
    if(data){
        res.status(200).send(data.username);
    }
    else{
        res.status(200).send("Failed");
    }
}