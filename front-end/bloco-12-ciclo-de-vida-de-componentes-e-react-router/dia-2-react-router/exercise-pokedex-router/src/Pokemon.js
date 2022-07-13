import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';
import { pokemonType } from './types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image, id } } = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:
            {' '}
            {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={ `/pokemons/${id}` }>Mais Detalhes</Link>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}
Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};
export default Pokemon;
