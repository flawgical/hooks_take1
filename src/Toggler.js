import React from 'react';
import useToggle from './hooks/useToggle'

function Toggler(){

    const [isHappy, toggleIsHappy] = useToggle(true)
    const [isParty, toggleIsParty] = useToggle(false)

    return(
        <>
        <h1 onClick={toggleIsHappy}>{isHappy ? "😼" : "😠"}</h1>
        <h1 onClick={toggleIsParty}>{isParty ? "🎉" : "⛔"}</h1>
        </>

    )
}

export default Toggler;







