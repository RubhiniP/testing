import React, { useState, useEffect } from "react";

function Skills({ skills }){
    const [ loggedIn, setLoggedIn ] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoggedIn(true)
        }, 1500)
    }, []);

    return(
        <ul>
            {
                skills.map(skill => {
                    return <li key={skill}>{skill}</li>
                })
            }
            {
                loggedIn 
                ? <button>Start learning</button>
                : <button onClick={() => setLoggedIn(true)}>Login</button>
            }
        </ul>
    );
}

export default Skills;