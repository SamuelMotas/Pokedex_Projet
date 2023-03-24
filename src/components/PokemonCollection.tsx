import React from 'react'
import { Pokemon } from '../interface'
import "./Pokemon.css"
import PokemonList from './PokemonList'

interface Props {
    pokemons: Pokemon[]
}

const PokemonCollection: React.FC<Props> = (props) => {
    const { pokemons } = props

    return <section className='collection-container'>
        {pokemons.map((pokemon) => {
            return <PokemonList key={pokemon.id} />
        })}

    </section>
}

export default PokemonCollection