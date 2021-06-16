import { axiosDefault, axiosWithCookies } from './axios.instance';

export default class AuthenticateService {
  static async login (username, password) {
    try {
      const response = await axiosWithCookies.post('/auth/login', {
        username,
        password
      });
      return response.data;
    } catch (e) {
      return null;
    }
  }

  static async logout () {
    try {
      const response = await axiosWithCookies.get('/auth/logout');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  static async verifyToken () {
    try {
      const response = await axiosWithCookies.get('/auth');
      return response.data;
    } catch (e) {
      return null;
    }
  }
}
