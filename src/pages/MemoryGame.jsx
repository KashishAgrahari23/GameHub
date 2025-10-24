import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const symbols = ["🍎", "🍌", "🍇", "🍓", "🍒", "🍍"]; 

const MemoryGame = () => {
  const [cards, setCards] = useState([]);        
  const [flipped, setFlipped] = useState([]);    
  const [matched, setMatched] = useState([]);    
  const [moves, setMoves] = useState(0);         

  const shuffleCards = () => {
    const shuffled = [...symbols, ...symbols] 
      .sort(() => Math.random() - 0.5)        
      .map((symbol, index) => ({
        id: index,
        symbol,
      }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  useEffect(() => {
    shuffleCards(); 
  }, []);

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    setFlipped([...flipped, index]);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = flipped;
      if (cards[first].symbol === cards[second].symbol) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000); 
      }
    }
  }, [flipped]);

  const handleReset = () => {
    shuffleCards();
  };

  const hasWon = matched.length === cards.length && cards.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-purple-700"> Memory Flip Card Game</h2>
          <Link to="/" className="text-sm text-blue-700 hover:underline">
            Go Back
          </Link>
        </header>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-lg font-medium mb-4">
            Moves: <span className="font-bold">{moves}</span>
          </div>

          {hasWon ? (
            <div className="text-green-600 font-semibold text-xl mb-4">
              🎉 You Won in {moves} moves!
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-3">
              {cards.map((card, index) => {
                const isFlipped = flipped.includes(index) || matched.includes(index);
                return (
                  <button
                    key={card.id}
                    onClick={() => handleFlip(index)}
                    className={`w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-lg shadow 
                      transition-all duration-300 
                      ${isFlipped ? "bg-white text-purple-700" : "bg-purple-500 text-transparent"}
                    `}
                  >
                    {isFlipped ? card.symbol : "❓"}
                  </button>
                );
              })}
            </div>
          )}

          <button
            onClick={handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-red-600 transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
