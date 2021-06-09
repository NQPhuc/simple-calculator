import * as service from '../services/index.js';
import db from '../models/core.js';
import * as config from '../config.js';

export async function registerNewUser(req, res){
    const {username, password} = req.body;
    const user = await service.UserService.createNewUser(username, password);
    if(user){
        res.status(200).send("OK");
    }
    else{
        res.status(200).send("Failed");
    }
}