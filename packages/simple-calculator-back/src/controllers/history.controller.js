import * as service from '../services/index.js';
import db from '../models/core.js';
import * as config from '../config.js';

export async function getAllHistoryOfUser(req, res){
    const token = req.cookies.token;
    const data = await service.AuthenticateService.getUserDataByToken(token);
    if(!data){
        res.status(200).send("Not logged in");
        return;
    }
    
    const userWithHistories = await service.HistoryService.getAllHistoryOfUser(data.id);
    res.status(200).send(userWithHistories.histories);
}