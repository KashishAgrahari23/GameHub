import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NumberGuess = () => {
  const [target, setTarget] = useState(0); 
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guess) return;

    const num = Number(guess);
    setAttempts((prev) => prev + 1);

    if (num === target) {
      setMessage(` Correct! You guessed in ${attempts + 1} attempts!`);
    } else if (num < target) {
      setMessage("  Too low! Try again.");
    } else {
      setMessage(" Too high! Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-orange-700">🎯 Number Guessing Game</h2>
          <Link to="/" className="text-sm text-blue-700 hover:underline">
            Go Back
          </Link>
        </header>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-600 mb-4">Guess the number between 1 and 100</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="w-full border rounded-lg p-2 text-center text-lg outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your guess..."
              min="1"
              max="100"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all"
            >
              Check Guess
            </button>
          </form>

          {message && (
            <div
              className={`mt-4 text-lg font-semibold ${
                message.includes("Correct")
                  ? "text-green-600"
                  : message.includes("low")
                  ? "text-blue-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}

          <p className="text-gray-500 mt-3">Attempts: {attempts}</p>

          <button
            onClick={resetGame}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 transition-all"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberGuess;
