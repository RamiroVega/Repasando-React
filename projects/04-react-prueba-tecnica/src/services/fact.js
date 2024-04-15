const  urlCatsRandomFact = 'https://catfact.ninja/fact'

export const getRamdomFact = async () =>{
        const res = await fetch(urlCatsRandomFact)
        const data = await res.json()
        const {fact} = data

        return fact
    } 
