import React, { useState } from 'react';
import TicTacToeSquare from './components/TicTacToeSquare/ticTacToeSquare';
import Title from './components/Title/title';
import { defineWinner, isBoardFull  } from './components/common/common';
import Restart from './components/Restart/restart';
import Status from './components/Status/status';

function TicTacToe(){

    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const title = "Tic tac toe game, let's play!";
    const [ shouldBeX, setXNext ] = useState(true);
    const nextSymbol = shouldBeX ? "X" : "O";
    const isWinner = defineWinner(squares);

    const renderSquare = (position) => {
        return (
          <TicTacToeSquare
            value={squares[position]}
            onClick={() => {
                debugger;
              if (squares[position] != null || isWinner != null) {
                return;
              }
              const tmpSquares = [...squares];
              tmpSquares[position] = nextSymbol;
              setSquares(tmpSquares);
              setXNext(!shouldBeX);
            }}
          />
        );
    }

      function getStatus() {
        if (isWinner) {
          return "Winner: " + isWinner;
        } else if (isBoardFull(squares)) {
          return "Draw!";
        } else {
          return "It's Your Turn Next: " + nextSymbol;
        }
      }
    
    const restart = () =>{
        setSquares(Array(9).fill(null));
        setXNext(true);
    }


    return(
    <>
    <Title title={title} />
    <div className="wrapper">
        <div className="game-wrapper">
            <div className="game-board">
                <div className="squareRow">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <Status getStatus={()=>getStatus()} />
            <Restart onClick={() => restart()} />
        </div>
        <div className="history">
            <h2>Historical moves</h2>
            {squares.map((x,index) => {
                return(
                    <span>{nextSymbol}{' '}played{' '}{x}{' '}at{index}</span>
                )
            }) }
        </div>
    </div>
    </>
    );
}

export default TicTacToe;