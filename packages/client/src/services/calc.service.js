import {axiosDefault, axiosWithCookies} from './axios.instance';

export default class CalcService{
  static async calculate(operand1, operand2, operator){
    try {
      return (await axiosWithCookies.post('/calc',{
        operand1: operand1,
        operand2: operand2,
        operator: operator
      })).data;
    }
    catch (e) {
      return null;
    }
  }
}