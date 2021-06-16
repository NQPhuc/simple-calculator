import { axiosDefault, axiosWithCookies } from './axios.instance';

export default class UserService {
  static async register (username, password) {
    try {
      const response = await axiosDefault.post('/user/register', {
        username,
        password
      });
      return response.data;
    } catch (e) {
      return null;
    }
  }
}
