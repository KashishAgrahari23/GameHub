import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function calculateWinner(sq){
    console.log(sq, "hitttt")
    const lines=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  for (let [a,b,c] of lines){
    if (sq[a] && sq[a]==sq[b] && sq[a]==sq[c]){
        return sq[a]
        
    }
  }
  return null
}
const TicTacToe = () => {
    console.log("kjdfkjbbdkjbn")
    const [board , setBoard] = useState(Array(9).fill(null))
    const [next, setNext] = useState(true)
    const [win, setWin] = useState(null)

    useEffect(()=>{
        const win= calculateWinner(board)
        if (win){
            setWin(win)
            setTimeout(()=> {
                handleReset()
            },2000)
        }else if (!board.includes(null)){
            setWin("Draw")
            setTimeout(()=> {
                handleReset()
            },2000)

        }
    },[board])

    const handleClick=(i)=>{
        if (win || board[i]) return
        const nextPlayer = board.slice()
        nextPlayer[i] = next?"X" :"O"
        setBoard(nextPlayer)
        setNext(prev=>!prev)
    }
    const handleReset=()=>{
        console.log("reset")
        setBoard(Array(9).fill(null))
        setNext(true)
        setWin(null)
    }

    const isDraw= !win && board.every(Boolean)
    const status = win ? `Winner: ${win}` : isDraw ? "Its a draw" : `Next Player : ${next? "X" :"O"}`
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
    <div className='max-w-md w-full text-center'>
        <header className='flex items-center justify-between mb-6 '>
      <h2 className='text-2xl font-bold'>Tic Tac Toe Game</h2>
      <Link to="/" className='text-sm text-blue-900 hover:underline'>  Go Back</Link>
        </header>

        <div className='bg-white p-6 rounded-xl shadow'>
            <div className='mb-4 text-center'>
                <div className='text-lg font-medium'>{status}</div>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {board.map((_,i)=>(
                    <button key={i} onClick={()=> handleClick(i)} className='w-20 h-20 flex items-center justify-center text-3xl font-bold bg-white border rounded-md'>{board[i]}</button>
                ))}
            </div>
            <div className='flex items-center justify-between mt-6'> 
                <button onClick={handleReset} className="bg-red-900 text-white px-4 py-2 rounded-md" >Reset</button>

            </div>
        </div>

    </div>
    </div>
  )
}

export default TicTacToe
