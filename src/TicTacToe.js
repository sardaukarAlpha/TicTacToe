import React, { useState } from 'react';
import TicTacToeSquare from './components/TicTacToeSquare/ticTacToeSquare';
import TicTacToeBoard from './components/TicTacToeBoard/ticTacToeBoard';
import Title from './components/Title/title';
import { defineWinner, isBoardFull  } from './components/common/common';
import Restart from './components/Restart/restart';
import Status from './components/Status/status';
import History from './components/History/history';

function TicTacToe(){

    const INIT_HISTORY = [{
        squares: Array(9).fill(null),
    }];
    const [history, setHistory ] = useState(INIT_HISTORY);
    const title = "Tic tac toe game, let's play!";
    const [ shouldBeX, setXNext ] = useState(true);
    const [stepNo, setStepNo] = useState(0);
    const nextSymbol = shouldBeX ? "X" : "O";
    const isWinner = defineWinner(history[stepNo].squares);

    const handleClick = (position) => {
      const pastMoves = history.slice(0, stepNo + 1);
      const current = [...pastMoves[stepNo].squares];
      if (current[position] !== null || isWinner != null) {
        return;
      }
      current[position] = shouldBeX ? 'X' : 'O';
      setHistory([...pastMoves, {squares: current}]);
      setXNext(!shouldBeX);
      setStepNo(pastMoves.length);
    }

    const renderSquare = (position) => {
        return (
          <TicTacToeSquare
            className="square"
            value={history[stepNo].squares[position]}
            onClick={() => {
              handleClick(position)
            }}
          />
        );
    }

    const goToPosition = (step) => {
        setStepNo(step);
        setXNext(step % 2  === 0 );
    }

      function getStatus() {
        if (isWinner) {
          return "Winner: " + isWinner;
        } else if (isBoardFull(history[stepNo].squares)) {
          return "Draw!";
        } else {
          return "It's Your Turn Next: " + nextSymbol;
        }
      }
    
    const restart = () =>{
        setXNext(true);
        setHistory(INIT_HISTORY);
        setStepNo(0);
    }

    return(
    <>
    <Title title={title} />
    <div className="wrapper">
        <div className="game-wrapper">
            <div className="game-board">
                <TicTacToeBoard onClick={renderSquare} />
            </div>
            <Status getStatus={()=>getStatus()} />
            <Restart onClick={() => restart()} />
        </div>
        <div className="history">
            <h2>Past moves</h2>
            <History history={history} goToPosition={goToPosition}v/>
        </div>
    </div>
    </>
    );
}

export default TicTacToe;