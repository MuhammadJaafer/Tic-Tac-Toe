import { useState } from "react";
import Borde from "./components/Borde";

function App() {
  const [borde, setBorde] = useState(["", "", "", "", "", "", "", "", ""]);
  const handleBorde = (index) => {
    setBorde((prev) => {
      prev[index] = "o";
      return prev;
    });
    console.log(index);
  };
  return (
    <div className="App">
      <h1>
        <span className="blue-text-glow">Tic </span>
        <span className="red-text-glow">Tac </span>
        <span className="blue-text-glow">Toe </span>
      </h1>
      <Borde borde={borde} handleBorde={handleBorde} />
      <div className="score">
        <div className="player-score">
          <div>Player 1</div>
          <div className="player1-score">0</div>
        </div>
        <div className="text-score">Score</div>
        <div className="player-score">
          <div>Player 2</div>
          <div className="player2-score">0</div>
        </div>
      </div>
    </div>
  );
}

export default App;
