import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function calculateWinner(){
    const obj={
        "Rock":1,
        "Paper":2,
        "Scissors":3
    }
    const compiterChoice = Math.random(1,3)

}

const RockPaperScissor = () => {
    const [turn ,setTurn] = useState(null)
    const [choice , setChoice] = useState(null)
    const [score , setScore] = useState(0)
    const [ winner , setWinner] = useState(null)
    const choices =["Rock","Paper","Scissors"]

    const handleClick =(e)=>{
        setTurn(e.value)
        
    }

    const handleReset=()=>{
        setTurn("User")
        setScore(0)
        setWinner(null)
        setChoice(null)
    }

    const value=calculateWinner()
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
    <div className='max-w-md w-full text-center'>
        <header className='flex items-center justify-between mb-6 '>
      <h2 className='text-2xl font-bold'>Rock Paper Scissor Game</h2>
      <Link to="/" className='text-sm text-blue-900 hover:underline'>  Go Back</Link>
        </header>

        <div className='bg-white p-6 rounded-xl shadow'>
            <div className='mb-4 text-center'>
                <div className='text-lg font-medium'>turn</div>
            </div>
            <div onClick={()=>handleClick()} className='grid grid-cols-3 gap-3'>
                <button value="Rock" onChange={(e)=>setChoice(e.value)}>Rock</button>
                <button value="Paper" onChange={(e)=>setChoice(e.value)}>Paper</button>
                <button value="Scissors" onChange={(e)=>setChoice(e.value)}>Scissors</button>
            </div>
            <div className='flex items-center justify-between mt-6'> 
                <button onClick={handleReset} className="bg-red-900 text-white px-4 py-2 rounded-md" >Reset</button>

            </div>
        </div>

    </div>
    </div>
  )
}

export default RockPaperScissor
