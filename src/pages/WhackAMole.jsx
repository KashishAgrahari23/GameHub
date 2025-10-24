import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WhackAMole = () => {
  const [moleIndex, setMoleIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let moleInterval;
    let timer;

    if (isPlaying) {
      moleInterval = setInterval(() => {
        setMoleIndex(Math.floor(Math.random() * 9));
      }, 800);

      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            clearInterval(moleInterval);
            setIsPlaying(false);
            setMoleIndex(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(moleInterval);
      clearInterval(timer);
    };
  }, [isPlaying]);

  const handleWhack = (index) => {
    if (index === moleIndex) {
      setScore((prev) => prev + 1);
      setMoleIndex(null);
    }
  };

  const handleStart = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-6">
      <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow text-center">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700"> Whack-a-Mole</h2>
          <Link to="/" className="text-blue-700 hover:underline text-sm">Go Back</Link>
        </header>

        <p className="text-gray-600 mb-2">Time Left: {timeLeft}s</p>
        <p className="font-semibold mb-4">Score: {score}</p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              onClick={() => handleWhack(i)}
              className={`w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all
                ${moleIndex === i ? 'bg-green-500 text-white text-2xl' : 'bg-gray-300'}`}
            >
              {moleIndex === i ? '🐹' : ''}
            </div>
          ))}
        </div>

        {!isPlaying ? (
          <button
            onClick={handleStart}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Start Game
          </button>
        ) : (
          <button
            disabled
            className="bg-gray-400 text-white px-5 py-2 rounded-lg cursor-not-allowed"
          >
            Playing...
          </button>
        )}
      </div>
    </div>
  );
};

export default WhackAMole;
