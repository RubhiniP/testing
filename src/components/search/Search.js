import React, { useState } from "react";

function Search(){

    const [ text, setText ] = useState('');

    const changeHandler = (e) => {
        setText(e.target.value);
    }

    return(
        <div>
            <Input value={text} onChange={changeHandler}>Search</Input>

            <p>You searched for: {text ? text : '...' }</p>
        </div>
    );
}

function Input({ value, onChange, children }){
    return(
        <div>
            <label forhtml="search">{children}</label>
            <input 
            id="search"
            type="text"
            value={value}
            onChange={onChange}
            />
        </div>
    );
}

export default Search;