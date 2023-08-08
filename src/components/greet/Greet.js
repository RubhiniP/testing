import React from "react";

function Greet(){
    return(
        <div>
            Hello<br />
            <label htmlFor="country">Select your country</label><br />
            <select id="country" multiple>
                <option value="AU">Australia</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
            </select>
        </div>
    );
}

export default Greet;