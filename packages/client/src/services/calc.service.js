import { axiosDefault, axiosWithCookies } from './axios.instance';

export default class CalcService {
  static async calculate (operand1, operand2, operator) {
    try {
      const response = await axiosWithCookies.post('/calc', {
        operand1,
        operand2,
        operator
      });
      return response.data;
    } catch (e) {
      return null;
    }
  }
}
