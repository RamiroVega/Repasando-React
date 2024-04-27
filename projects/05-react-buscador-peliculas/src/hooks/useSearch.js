import { useEffect, useState, useRef } from 'react'

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    
    useEffect(() =>{

      if (isFirstInput.current) {
        isFirstInput.current = search ===''
        return
      }
        
      if (search === '') {
        setError ('No se ingreso titulo de la pelicula')
        return
      }
      if (search.match(/^\d+$/)) {
        setError ('Titulo de la pelicula no puede ser numerico')
        return
      }
      if (search.length < 3) {
        setError('La busqueda debe tener al menos 3 caracteres')
        return
      }
      setError(null)
     
    }, [search])
  
    return {search, updateSearch, error}
  }