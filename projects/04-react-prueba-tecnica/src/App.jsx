import { useEffect, useState } from "react"
import './App.css'
import { getRamdomFact } from "./services/fact";
import { useCatImage } from "./hooks/useCatImage";



export function App() {
    const [fact , setFact] = useState();
    const {imageUrl} = useCatImage({fact})
   
    

    useEffect (() =>{
        
        getRamdomFact().then(newFact => setFact(newFact))
        
    },[]) 

   

    const handelClick = async () =>{
       const newFact = await getRamdomFact();
       setFact (newFact)
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