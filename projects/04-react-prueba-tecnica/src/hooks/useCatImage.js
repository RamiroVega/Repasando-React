import { useEffect, useState } from "react";

useEffect

export function useCatImage({fact}) {
        const [imageUrl, setImageUrl] = useState();

        useEffect(() =>{
            if (!fact) return

            //Tomo las primeras tres palabas con split()
            //y las guardo en una constante agupandoras con Join()
            const threeFirstWords = fact.split(' ', 3).join(' ');
            // Creo una nueva url para capturar la imagen con las palabras capturadas anteriormente del fact
            const url = new URL(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
            // envio la url al estado imageUrl para que se renderice
            setImageUrl(url)
            console.log(url);
        },[fact])

        return {imageUrl}
    }// {imageUrl: 'https://......'}    