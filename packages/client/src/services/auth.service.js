import {axiosDefault, axiosWithCookies} from './axios.instance';

export default class AuthenticateService{
  static async login(username, password){
    try {
      return (await axiosWithCookies.post('/auth/login',{
        username: username,
        password: password
      })).data;
    } 
    catch (e) {
      console.log(e);
    }
  }

  static async logout(){
    try{
      return (await axiosWithCookies.get('/auth/logout')).data;
    } 
    catch (e) {
      return null;
    }
        
  }

  static async verifyToken(){
    try {
      return (await axiosWithCookies.get('/auth')).data;
    } 
    catch (e) {
      return null;
    }   
  }
}