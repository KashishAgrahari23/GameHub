import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-2"> Game Hub</h1>
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to the Playzone!</h3>
      <p className="text-gray-600 mb-8">Choose any game to get started </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          to="/tic-tac-toe"
          className="bg-white shadow-md rounded-xl px-8 py-6 text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
           Tic Tac Toe
        </Link>

        <Link
          to="/rock-paper-scissor"
          className="bg-white shadow-md rounded-xl px-8 py-6 text-lg font-semibold text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
        >
           Rock Paper Scissors
        </Link>
        <Link
          to="/memory-game"
          className="bg-white shadow-md rounded-xl px-8 py-6 text-lg font-semibold text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300"
        >
           Memory Game
        </Link>
        <Link
          to="/number-guess"
          className="bg-white shadow-md rounded-xl px-8 py-6 text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
           Number Guess
        </Link>
      </div>
    </div>
  )
}

export default Home
