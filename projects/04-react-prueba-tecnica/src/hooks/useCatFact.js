import { useEffect , useState} from "react";
import { getRamdomFact } from "../services/fact";

export function useCatFact (){
        const [fact , setFact] = useState();


        const refreshFact = () =>{
            getRamdomFact().then(newFact => setFact(newFact))
        }

        useEffect (refreshFact,[])

        return {fact, refreshFact}
}
