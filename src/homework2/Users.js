import  {useEffect, useState} from "react";
import User from "./User";
//import {getUser, getUsers} from "../services/user.api";

import {getUsersAxios, getUserAxios} from "../services/user.api.axios";




function Users()
{
    let [users, setUsers] = useState([]);
    let [user,setUser] =useState({})
    let [posts, setPosts]=useState([])

    const lift = (obj)=>
    {
       setUser(obj)
    }


useEffect(() =>
{

    getUsersAxios().then(value =>setUsers(value.data));
    getUserAxios(user.id).then(value => setPosts(value.data));

},[]);


    return (
        <div>
            <hr/>

                   {user && <h3> {JSON.stringify(posts)} </h3>}
             <hr/>


            {
                users.map(user => <User key={user.id}
                                        user={user} lift={lift}
                />)
            }
        </div>
    );
}


export default Users;
