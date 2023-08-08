import axios from "axios";
import React, { useState } from "react";

function PostUsers(){
    const [ users, setUsers ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const postHandler = () => {
        axios.post("https://jsonplaceholder.typicode.com/users", {
            id: 1,
            name: "Rubhini",
            username: "Ruby",
            email: "abc@gmail.com"
        })
        .then(response => {
            setUsers(response.data);
            console.log(response.data);
            setErrorMessage('');
        })
        .catch(() => {
            setUsers([]);
            setErrorMessage("Error fetching data");
        })
    }

    return(
        <div>
            <h2>Post users</h2>
            {
                errorMessage && <div>Something went wrong!</div>
            }
            {
                <button onClick={postHandler}>Post data</button>
            }
            {
                users?.length > 0 && 
                users.map(user => <p key={user.id}>{user.username} | {user.email}</p>)
            }            
        </div>
    )
}

export default PostUsers;