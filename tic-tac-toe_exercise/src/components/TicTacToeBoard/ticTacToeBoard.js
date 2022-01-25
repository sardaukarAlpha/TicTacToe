import React from 'react';

function TicTacToeBoard(props){
    const { onClick } = props;
    return(
        <><div className="squareRow">
            {onClick(0)}
            {onClick(1)}
            {onClick(2)}
        </div><div className="board-row">
            {onClick(3)}
            {onClick(4)}
            {onClick(5)}
        </div><div className="board-row">
            {onClick(6)}
            {onClick(7)}
            {onClick(8)}
        </div>
    </>
    )
}

export default TicTacToeBoard;