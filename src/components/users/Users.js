import React, { useState, useEffect } from "react";
import axios from "axios";

function Users(){
    const [ users, setUsers ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setUsers(response.data);
                setErrorMessage('');
                console.log(response);
            })
            .catch(() => {
                setErrorMessage("Error fetching data");
                setUsers('');
            })
    }, []);

    return(
        <div>
            <h2>Users List</h2>
            {
                errorMessage && <p>{errorMessage}</p>
            }
            <ul>
            {
                users?.length > 0 &&
                users.map(user => <li key={user.id}>{user.title}</li>)
            }
            </ul>
        </div>
    );
}

export default Users;