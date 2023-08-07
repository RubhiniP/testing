import React, { useState, useEffect } from "react";

function Users(){

    const [ users, setUsers ] = useState([]);
    const [ error, setError ] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data.json());
                setError('');
            })
            .catch(() => {
                setError("Error fetching data");
                setUsers([]);
            })
    }, [users]);

    return(
        <div>
            <h2>Users</h2>
            {error && <p>{error}</p>}

            <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Users;