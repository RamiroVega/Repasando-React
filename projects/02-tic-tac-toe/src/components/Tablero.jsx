import { Square } from "./Square"

export function Tablero(board) {
    return(
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
    )
}