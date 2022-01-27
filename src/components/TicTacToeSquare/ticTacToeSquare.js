import React from 'react';

function TicTacToeSquare({className, value, onClick}){
    return(
    <button className={className} onClick={onClick}>
        {value}
    </button>
    )
}

export default TicTacToeSquare;




