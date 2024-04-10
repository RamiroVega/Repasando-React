import { useState } from 'react';
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}



const Square = ({children, isSelected, udateBoard, index})=>{
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = ()=>{
    udateBoard()
  }

  return (
      <div onClick={handleClick} className={className}>
        {children}
        {console.log(children)}
      </div>
  )
}


function App() {

  const [board, setBoard] = useState(
    Array(9).fill(null)
  );

  const updateBoard = ()=>{
   const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
   setTurn(newTurn)
  }

  const [turn, setTurn] = useState(TURNS.X)

  return (
    <main className='board'>
      <h1>Tic Toc Toe</h1>
      <section className="game">
        {
         board.map((_, index) => {
          return(
            <Square   key ={index}
                      index= {index}
                      udateBoard={updateBoard}
            >                        
              {board[index]}
            </Square>           
          )
         })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

    </main>
  )
}

export default App
