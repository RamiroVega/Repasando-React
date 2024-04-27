import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'


function App() { 

  const {movies} = useMovies()
  const {search, updateSearch, error} = useSearch()
  

  
  const handleSubmit = (event) =>{
    event.preventDefault()
   console.log({search});

  }

  const handleChange = (event) =>{
    updateSearch(event.target.value)
  }


  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{borderColor: error ? 'red' : 'transparent'}} 
          onChange={handleChange} value={search} name='searchTitle' className='searchTitle' placeholder='Avenger, DeadPool, Matrix, Assassen Cread......' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>
      <main>
        <h3>Resultados de Busqueda</h3> 
          <Movies movies={movies}/>     
      </main>
    </div>
  )
}

export default App
