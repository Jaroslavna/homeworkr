import {axiosService} from "./axiosservice";
import {urls} from "../config/urls";

const  userService = {
    getAll:() => axiosService.get(urls.users)
}


export {
    userService
}