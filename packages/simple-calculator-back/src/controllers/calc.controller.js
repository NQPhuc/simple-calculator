import * as service from '../services/index.js';
import db from '../models/core.js';
import * as config from '../config.js';
import * as calc from '../libs/calc.js'

export async function calculate(req, res){
    const {operand1, operand2, operator} = req.body;
    const token = req.cookies.token;

    let promises = [];
    promises.push(calc.calculate(operand1, operand2, operator));
    promises.push(service.AuthenticateService.getUserDataByToken(token));
    
    const [calculationResult, userData] = await Promise.all(promises);
    
    if(userData){
        service.HistoryService.appendHistory(userData.id, operand1, operand2, operator, calculationResult);
        res.status(200).send({result: calculationResult, saved: true});
    }
    else{
        res.status(200).send({result: calculationResult, saved: false});
    }

    
}