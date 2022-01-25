import React from 'react';

function History({history, goToPosition}){
    
    const moves = history.map((__step, move) => {
        const description = move ? 'Go to move ' + move : 'Go to game start';
        return (
            <li key={move}>
                <button className="buttonPast" onClick={() => goToPosition(move)}>{description}</button>
            </li>
        );
    });
    return moves;
}

export default History;