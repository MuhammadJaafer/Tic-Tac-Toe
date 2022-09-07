import { useState } from "react";
import Borde from "./components/Borde";
const initBorde = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [borde, setBorde] = useState(initBorde);
  const [turn, setTurn] = useState("player1");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const handleClick = (e) => {
    const index = e.target.getAttribute("index");
    if (!index) {
      console.log("already taken");
      return;
    }

    console.log(index, turn);

    const newBorde = [...borde];
    newBorde[index] = turn === "player1" ? "x" : "o";
    setBorde(newBorde);
    setTurn((prev) => {
      if (prev === "player1") return "player2";
      else return "player1";
    });
  };

  console.log(borde);

  return (
    <div className="App">
      <h1>
        <span className="blue-text-glow">Tic </span>
        <span className="red-text-glow">Tac </span>
        <span className="blue-text-glow">Toe </span>
      </h1>
      <Borde borde={borde} handleClick={handleClick} />
      <div className="score">
        <div className="player-score">
          <div>Player 1</div>
          <div className="player1-score">{player1Score}</div>
        </div>
        <div className="text-score">Score</div>
        <div className="player-score">
          <div>Player 2</div>
          <div className="player2-score">{player2Score}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
