import React from "react";

function IncrementDecrement(props){
    return(
        <div>
            <h2>Callback Handlers Example</h2>
            <p>Count: {props.count}</p>
            {
                props.incrementHandler && <button onClick={props.incrementHandler}>Increment</button>
            }
            {
                props.decrementHandler && <button onClick={props.decrementHandler}>Decrement</button>
            }            
        </div>
    );
}

export default IncrementDecrement;