import React, { useState } from "react";

function Counter2(){
    
    const [ count, setCount ] = useState(0);
    const [ clicked, setClicked ] = useState(false);
    const [ amount, setAmount] = useState(1);
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(parseInt(count)+1)}>Increment</button><br />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => setCount(parseInt(amount))}>Set</button>
            {
                clicked
                ? <img 
                src="https://countthekicks.org/content/uploads/2020/12/Step-Graphic-01.png" 
                alt="count"
                />
                : <button onDoubleClick={() => setClicked(true)}>Show me</button>
            }
        </div>
    );
}

export default Counter2;