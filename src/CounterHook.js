import React, { useState } from 'react';


function CounterHook(){
    const [count, setCount] = useState(0);
    return (
        <>
        <h1>This Count is:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
        </>
    )
}

export default CounterHook