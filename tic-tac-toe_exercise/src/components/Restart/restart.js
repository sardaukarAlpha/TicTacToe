import React from 'react';

function Restart({onClick}){
    return(
    <button className='restart' id="restart-btn" onClick={onClick}>restart</button>
    )
}

export default Restart;