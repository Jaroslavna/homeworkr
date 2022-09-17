import {useEffect, useState} from "react";
import User from "./User";


function Users() {
    let [users, setUsers] = useState([]);
    let [user,setUser] =useState({})

    const lift = (obj)=>{
       setUser(obj)
    }


useEffect(()=> {


    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        });
},[]);


    return (
        <div>
            <hr/>
                   {user && <h3> {user.email} --- {user.phone} </h3>}
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