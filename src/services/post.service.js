import {axiosService} from "./axiosservice";
import {urls} from "../config/urls";

const postService = {
    getPosts: (userId) => axiosService.get(`${urls.posts}/?userId=${userId}`)
}
export {
    postService
}