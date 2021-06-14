import * as service from '../services/index.js';
import db from '../models/core.js';
import * as config from '../config.js';
import * as calc from '../utils/calc.js';

export async function calculate (req, res) {
  const { operand1, operand2, operator } = req.body;
  const { token } = req.cookies;

  try {
    if (calc.isValidInteger(operand1) && calc.isValidInteger(operand2) && ['+', '-', '*', '%'].includes(operator)) {
      const promises = [];
      promises.push(calc.calculate(operand1, operand2, operator));
      promises.push(service.AuthenticateService.getUserDataByToken(token));

      const [calculationResult, userData] = await Promise.all(promises);

      if (userData) {
        service.HistoryService.appendHistory(
          userData.id, operand1, operand2, operator, calculationResult
        );
        res.status(200).send({ result: calculationResult, saved: true });
      } else {
        res.status(200).send({ result: calculationResult, saved: false });
      }
    } else {
      res.status(400).send("Wrong input");
    }
  } catch (e) {
    res.status(500).send("Server logic error");
  }
}

export async function isValidInteger (req, res) {
  // this function is here so eslint doesn't warn about prefer export default
  return "Not implemented";
}
