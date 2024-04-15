import './App.css'
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";



export function App() {
    const {fact, refreshFact} = useCatFact()
    const {imageUrl} = useCatImage({fact}) 
    

    const handelClick = async () =>{
       refreshFact()
    }

      return (
        <main className="main">
            <h1>App de gatitos</h1>
            <button onClick={handelClick}> Get New Fact</button>
            <section>                
                {fact && <p>{fact}</p>} 
                {imageUrl && <img src={imageUrl}  className="box" alt="cat"></img>}
            </section>           
        </main>
      )
}