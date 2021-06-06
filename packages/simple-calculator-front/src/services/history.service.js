import {axiosDefault, axiosWithCookies} from './axios.instance';

export default class HistoryService{
    static async getAllHistory(){
        return (await axiosWithCookies.get('/history/all')).data;
    }
}