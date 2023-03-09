import { useEffect, useState } from 'react';
import './App.css';

import Filter from './components/Filter';
import PokeList from './components/PokeList';
import Result from './components/Result';

import pokeService from './services/pokemon'

function App() {
  const [filter, setFilter] = useState('')
  const [isSearching, setSearching] = useState(true)
  const [pokemons, setPokemons] = useState([])
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  // let moviesToShow = filter === ''
  //   ? []
  //   : [1, 2, 3, 4]
  
  useEffect(() => {
    console.log('getting pokemons');
    pokeService
      .get20()
      .then((pokemons => {
        console.log('pokemons :>> ', pokemons);
        setPokemons(pokemons)
      }))
  }, [])
  
  useEffect(() => {
    if (filter !== '') {
      setSearching(true)
    } else {
      setSearching(false)
    }
  }, [filter])
  
  return (
    <div className="container">
      {/* <Filter
        handleFilterChange={(e) => handleFilterChange(e)}
        filter={filter}
      ></Filter> */}
      {!(pokemons.length) && (
        <Result></Result>
      )}

      <PokeList pokemons={pokemons}></PokeList>
      
      {/* <MovieList

      ></MovieList> */}
    </div>
  );
}

export default App;
