import React from 'react'
import {  BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import TicTacToe from './pages/TicTacToe'
import RockPaperScissor from './pages/RockPaperScissor'
import MemoryGame from './pages/MemoryGame'
import NumberGuess from './pages/NumberGuess'
import WhackAMole from './pages/WhackAMole'

const App = () => {
  return (
    <div className='text-center mt-10'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tic-tac-toe' element={<TicTacToe/>} />
          <Route path='/rock-paper-scissor' element={<RockPaperScissor/>} />
          <Route path='/memory-game' element={<MemoryGame/>} />
          <Route path='/number-guess' element={<NumberGuess/>} />
          <Route path='/whack-a-mole' element={<WhackAMole/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
