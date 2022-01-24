export const defineWinner = (squares) => {
    const optionLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < optionLines.length; i++) {
      const [a, b, c] = optionLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          winLine: optionLines[i],
          isDraw: false,
        };
      }
    }
    let isDraw = true;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        isDraw = false;
        break;
      }
    }
    return {
      winner: null,
      winLine: null,
      isDraw: isDraw,
    };
  }