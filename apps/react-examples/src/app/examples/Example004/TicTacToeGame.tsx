import { useState } from 'react';

type SquareData = string | null;

const initHistory: SquareData[] = Array(9).fill(null);

export function TicTacToeGame() {
  const [ history, setHistory ] = useState<SquareData[][]>([initHistory]);
  const [ current, setCurrent ] = useState<number>(0);

  const isNext: boolean = current % 2 === 0;
  const currentSquares: SquareData[] = history[current];

  const handlePlay = (nextSquares: SquareData[]) => {
    const nextHistory: SquareData[][] = [ ...history.slice(0, current + 1), nextSquares];
    setHistory(nextHistory);
    setCurrent(nextHistory.length - 1);
  }

  const handleClick = (index: number) => {
    if (calculateWinner(currentSquares) || currentSquares[index]) return;

    const nextSquares = currentSquares.slice();
    if (isNext) {
      nextSquares[index] = 'X';
    } else {
      nextSquares[index] = 'O';
    }
    handlePlay(nextSquares);
  }

  const jumpTo = (index: number) => setCurrent(index);
  const historyKeys = history.map((_, index) => index);
  const winner = calculateWinner(currentSquares);
  const status = winner
    ? 'Winner: ' + winner
    : 'Next player: ' + (isNext ? 'X' : 'O')

  return (
    <div className="game">
      <div className="game-board">
        <div className="game-status">{status}</div>
        <div className="game-board-row">
          <Square value={currentSquares[0]} onClick={() => handleClick(0)} />
          <Square value={currentSquares[1]} onClick={() => handleClick(1)} />
          <Square value={currentSquares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="game-board-row">
          <Square value={currentSquares[3]} onClick={() => handleClick(3)} />
          <Square value={currentSquares[4]} onClick={() => handleClick(4)} />
          <Square value={currentSquares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="game-board-row">
          <Square value={currentSquares[6]} onClick={() => handleClick(6)} />
          <Square value={currentSquares[7]} onClick={() => handleClick(7)} />
          <Square value={currentSquares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>

      <div className="game-info">
        <ol>
          {historyKeys.map((move) => {
            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>
                  {move > 0 ? 'Go to move #' + move : 'Go to game start'}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

type SquareProps = {
  value: SquareData;
  onClick: () => void;
};

function Square({ value, onClick }: SquareProps) {
  return (
    <button className="game-square" onClick={onClick}>
      {value ?? ' '}
    </button>
  );
}

function calculateWinner(squares: SquareData[]): SquareData | null {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
