import { useState } from 'react';
import './App.css'
import confetti from 'canvas-confetti';

import { Square } from './components/Square.jsx';
import { TURNS } from './constans.js'
import { checkWinnerFrom, checkEndgame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameStorage, resetGameStorage } from './logic/storage/storage.js';




function App() {

  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage)   return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  });

  const [turn, setTurn] = useState( () =>{
    const turnFromStorage = window.localStorage.getItem('turn')
   return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)  

  // Se reinicia juego para empezar de nuevo
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // Se llama funcion para reinicial estorage especifico
    resetGameStorage()
  }
     
  const updateBoard = (index)=>{
      // se evalua si hay contenido en la posicion que se hace clik
      //si hay contenido no se hace nada para evitar que se sobreescriba jugada
    if (board[index] || winner) return // evitar que se vuelva a rellenar la ubicacion
      // actulizar tablero
    const newBoard = [...board] // se crea un nuevo array con el contenido que tenga el array board para modificar contenido
    newBoard[index] = turn // se modifica el contenido en la posicion del index
    setBoard(newBoard) // se pinta el nuevo tablero
    //cambiar turno
   const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
   setTurn(newTurn)
   // Guardar Partidad
   saveGameStorage({
    board: newBoard,
    turn: newTurn
   })
   // se valida si hay ganador
   const newWinner = checkWinnerFrom(newBoard)
   if (newWinner) { // Se comprueba si hay gabador
      confetti()
      setWinner(newWinner)
   }else if (checkEndgame(newBoard)){
      setWinner(false)
   }  
   
  } 

  return (
    <main className='board'>
      <h1>Tic Toc Toe</h1>
      <section className="game">
        {
         board.map((square, index) => {
          return(
            <Square   key ={index}
                      index= {index}
                      udateBoard={updateBoard}
            >                        
              {square}
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
        <button onClick={resetGame}> Reiniciar Juego</button>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
