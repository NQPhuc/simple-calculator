import { axiosDefault, axiosWithCookies } from './axios.instance';

export default class HistoryService {
  static async getAllHistory () {
    try {
      const response = await axiosWithCookies.get('/history/all');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  static async clearHistory () {
    try {
      const response = await axiosWithCookies.delete('/history/all');
      return response.data;
    } catch (e) {
      return null;
    }
  }
}
