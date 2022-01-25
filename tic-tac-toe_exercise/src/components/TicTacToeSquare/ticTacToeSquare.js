import React from 'react';

function TicTacToeSquare(props){

    const { value, onChange } = props;

    return(
    <button className='square' onClick={onChange}>
        {value}
    </button>
    )
}

export default TicTacToeSquare;


