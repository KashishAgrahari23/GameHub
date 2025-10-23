import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='text-center mt-10'>
      <h1 >Game Hub</h1>
      <h3 className='text-3xl font-bold mb-4'>Welcome to playzone</h3>
      <p className='text-gray-600'>Choose any game :-</p>
      <div className=''>
        <Link to="/tic-tac-toe">TIC TAC TOE</Link>
        <Link to="/rock-paper-scissor">ROCK PAPER SCISSOR</Link>
      </div>
    </div>
  )
}

export default Home
