import {axiosDefault, axiosWithCookies} from './axios.instance';

export default class AuthenticateService{
    static async login(username, password){
        return (await axiosWithCookies.post('/auth/login',{
            username: username,
            password: password
        })).data;
    }

    static async logout(){
        return (await axiosWithCookies.get('/auth/logout')).data;
    }

    static async verifyToken(){
        return (await axiosWithCookies.get('/auth')).data;
    }
}