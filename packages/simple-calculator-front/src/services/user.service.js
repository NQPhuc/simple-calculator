import {axiosDefault, axiosWithCookies} from './axios.instance';

export default class UserService{
    static async register(username, password){
        return (await axiosDefault.post('/user/register',{
            username: username,
            password: password
        })).data;
    }
}