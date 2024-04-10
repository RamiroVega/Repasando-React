import { useState } from 'react';
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}


const Square = ({children, isSelected, udateBoard, index})=>{
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = ()=>{
    udateBoard(index)
    console.log(index);
  }

  return (
      <div onClick={handleClick} className={className}>
        {children}
        {console.log(children)}
      </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {

  const [board, setBoard] = useState(
    Array(9).fill(null)
  );
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) =>{
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
          boardToCheck[a] && // --> x u o
          boardToCheck[a] === boardToCheck[b] &
          boardToCheck[a] === boardToCheck[c]
         ){
          return boardToCheck[a] //x u o
         }
    }
    //Si no hay ganador
    return null
  }

  const updateBoard = (index)=>{
      // se evalua si hay contenido en la posicion que se hace clik
      //si hay contenido no se hace nada para evitar que se sobreescriba jugada
    if (board[index] || winner) return
      // actulizar tablero
    const newBoard = [...board] // se crea un nuevo array con el contenido que tenga el array board para modificar contenido
    newBoard[index] = turn // se modifica el contenido en la posicion del index
    setBoard(newBoard) // se pinta el nuevo tablero
    //cambiar turno
   const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
   setTurn(newTurn)
   // se valida si hay ganador
   const newWinner = checkWinner(newBoard)
   if (newWinner) {
      setWinner(newWinner)
   }
   
   
  } 

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
