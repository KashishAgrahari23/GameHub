import React, { useState } from "react";
import { Link } from "react-router-dom";

const RockPaperScissor = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ you: 0, comp: 0, draws: 0 });

  // 🧠 Step 1: Function to decide winner
  const getWinner = (user, comp) => {
    if (user === comp) return "Draw!";
    if (
      (user === "Rock" && comp === "Scissors") ||
      (user === "Paper" && comp === "Rock") ||
      (user === "Scissors" && comp === "Paper")
    ) {
      return "You Win!";
    }
    return "You Lose!";
  };

  // ⚙️ Step 2: On user click
  const handleClick = (val) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const compVal = choices[randomIndex];
    setUserChoice(val);
    setCompChoice(compVal);

    const res = getWinner(val, compVal);
    setResult(res);

    setScore((prev) => {
      if (res === "You Win!") return { ...prev, you: prev.you + 1 };
      if (res === "You Lose!") return { ...prev, comp: prev.comp + 1 };
      return { ...prev, draws: prev.draws + 1 };
    });
  };

  // 🔄 Step 3: Reset
  const handleReset = () => {
    setUserChoice(null);
    setCompChoice(null);
    setResult(null);
    setScore({ you: 0, comp: 0, draws: 0 });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Rock Paper Scissors Game</h2>
          <Link to="/" className="text-sm text-blue-900 hover:underline">
            Go Back
          </Link>
        </header>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="mb-4">
            <p className="text-lg font-medium mb-2">Make Your Choice</p>
            <div className="grid grid-cols-3 gap-3">
              {choices.map((val) => (
                <button
                  key={val}
                  onClick={() => handleClick(val)}
                  className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {userChoice && (
            <div className="mt-4">
              <p className="font-semibold">You: {userChoice}</p>
              <p className="font-semibold">Computer: {compChoice}</p>
              <p className="text-xl font-bold mt-2">{result}</p>
            </div>
          )}

          <div className="mt-4 text-left">
            <h3 className="font-semibold mb-2">Scoreboard</h3>
            <p>You: {score.you}</p>
            <p>Computer: {score.comp}</p>
            <p>Draws: {score.draws}</p>
          </div>

          <div className="mt-6">
            <button
              onClick={handleReset}
              className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissor;
