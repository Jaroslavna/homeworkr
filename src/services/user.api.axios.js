import axios from "axios";

let axiosInstans = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers:{'Content-Type':'application/json',}
});


let getUsersAxios = (value) =>
{
return axiosInstans(value)
}


let getUserAxios = (id) =>
{
    return axiosInstans.get('/' + id +'/posts' )
}

export {getUsersAxios,getUserAxios};