import {axiosDefault, axiosWithCookies} from './axios.instance';

export default class HistoryService{
  static async getAllHistory(){
    try {
      return (await axiosWithCookies.get('/history/all')).data;
    }
    catch (e) {
      return null;
    }
  }

  static async clearHistory(){
    try {
      return (await axiosWithCookies.delete('/history/all')).data;
    }
    catch (e) {
      return null;
    }   
  }
}