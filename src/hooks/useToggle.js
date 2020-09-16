import { useState } from 'react';

// call useState 
// piece of state and a function to toggle it - then we can call this hook from our component 


// call useState, "reserve" piece of state

function useToggle(initialVal = false){

    const [myState, setMyState] = useState(initialVal);
    
    const toggle = () => {
        setMyState(!myState)
    }
// return piece of state and a function to toggle it 
    return [myState, toggle]
}

export default useToggle;

