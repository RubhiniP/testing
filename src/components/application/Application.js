import React from "react";

function Application(){
    return(
        <div>
            <h1>Details</h1>
            <h2>Form</h2>

            <p>All fields are required</p>
            <div>All fields are required</div>

            <img 
            src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" 
            alt="camera on the table"
            />

            <span title="close">X</span>

            <div data-testid="custom-element">Custom HTML element</div>

            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" value="Rubhini" onChange={() => {}}/><br />

                <label htmlFor="about">About:</label>
                <textarea id="about" name="about"/><br />

                {/* <label htmlFor="country">Select your country:</label> */}
                <label htmlFor="country">Name:</label>
                <select id="country">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select><br />

                <label htmlFor="terms">
                    <input type="checkbox" id="terms" aria-checked="false"/>I agree to the terms and conditions
                </label><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Application;