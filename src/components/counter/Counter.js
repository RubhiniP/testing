import React from "react";

function Counter(props){
    return(
        <div>
            <h2>Counter example - Mocking functions</h2>
            Count: {props.count}
            {
                props.incrementCount && (
                    <button onClick={props.incrementCount}>Increment</button>
                )
            }
            {
                props.decrementCount && (
                    <button onClick={props.decrementCount}>Decrement</button>
                )
            }
        </div>
    );
}

export default Counter;