 import { WINNER_COMBOS } from "../constans"

 export const checkWinnerFrom = (boardToCheck) =>{
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

  export const checkEndgame =(newBoard)=>{
    // revisamos si hay enpate
    // si no hya mas esapacios vacios
    // en el tablero
    return newBoard.every((square) => square != null )
  }
