import React from 'react';
import {
  arrayOf,
} from 'prop-types';
import './index.css';
import types from './pokemonsType';
import Botao from './Botao';
import Pokemon from './Pokemon';
import { pokemonType } from './types';

class Pokedex extends React.Component {
  constructor() {
    super();
    if (!types.includes('All')) types.push('All');
    this.state = {
      pokemonIndex: 0,
      filteredType: 'All',
    };
    this.nextPokemn = this.nextPokemn.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
    this.fetchFilteredPokemons = this.fetchFilteredPokemons.bind(this);
  }

  nextPokemn(numberOFPokemons) {
    const number = numberOFPokemons.target.value;
    this.setState((prevState) => ({
      pokemonIndex: (prevState.pokemonIndex + 1) % number,
    }));
  }

  filterPokemons({ target }) {
    this.setState({
      filteredType: target.innerText,
      pokemonIndex: 0,
    });
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter((pokemon) => {
      if (filteredType === 'All') return true;
      return pokemon.type === filteredType;
    });
  }

  render() {
    const { pokemonIndex } = this.state;
    const filterPokemon = this.fetchFilteredPokemons();
    return (

      <div className="pokedex">

        <Pokemon pokemon={ filterPokemon[pokemonIndex] } />

        <div className="buttons-panel">
          { types.map((tipo, index) => (<Botao
            className="filter-button"
            key={ index }
            tipo={ tipo }
            lenght={ 0 }
            onClick={ this.filterPokemons }
          />)) }
        </div>

        <Botao
          className="pokedex-button"
          tipo="Proximo Pokemon"
          lenght={ filterPokemon.length }
          onClick={ this.nextPokemn }
          disabled={ filterPokemon.length <= 1 }
        />
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
