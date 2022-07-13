import React from 'react';
import PropType from 'prop-types';
import { pokemonType } from './types';

class PokemonDetails extends React.Component {
  render() {
    const { pokemons, match: { params: { id } } } = this.props;
    const pokemonFind = pokemons.find((pokemon) => pokemon.id === Number(id));
    const { name, type } = pokemonFind;
    return (
      <section>
        <h1>{name}</h1>
        <h2>{type}</h2>
      </section>
    );
  }
}

PokemonDetails.propTypes = {
  pokemons: pokemonType.isRequired,
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.number.isRequired,
    }),
  }).isRequired,
};

export default PokemonDetails;
