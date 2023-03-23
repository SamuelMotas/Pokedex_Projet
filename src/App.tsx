import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface Pokemons {
  name: string
  url: string
}

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {

    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
        )
        console.log(res.data.results)

        res.data.results.forEach(async (pokemon: Pokemons) => {
          const poke = await axios.get("https://pokeapi.co/api/v2/pokemon/${pokemon.name}")
        })
        
    }
    
    getPokemon()
  }, [])


  return (
    <div className="App">
      <header className="pokemon-header">
        Pokemon
      </header>
    </div>
  );
}

export default App;
