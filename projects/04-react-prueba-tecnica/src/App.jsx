import { useEffect, useState } from "react"
import './App.css'

const  urlCatsRandomFact = 'https://catfact.ninja/fact'

export function App() {
    const [fact , setFact] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [threeFirstWords, setThreeFirstWords] = useState();
    

    useEffect (() =>{
        fetch('https://catfact.ninja/fact')
        .then(res =>res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)  
            
            //Tomo las primeras tres palabas con split()
            //y las guardo en una constante agupandoras con Join()
            const threeFirstWords = fact.split(' ', 3).join(' ');
            setThreeFirstWords(threeFirstWords);
        })  
    },[]) 

    useEffect(() =>{
        if (!fact) return
        // Creo una nueva url para capturar la imagen con las palabras capturadas anteriormente del fact
        const url = new URL(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
        // envio la url al estado imageUrl para que se renderice
        setImageUrl(url)
    },[fact])

      return (
        <main className="main">
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>} 
                {imageUrl && <img src={imageUrl}  className="box" alt="cat"></img>}
            </section>           
        </main>
      )
}