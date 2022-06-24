import pokemons from './data';

const types = pokemons.reduce((acc, pokemon) => {
  if (!acc.includes(pokemon.type)) acc.push(pokemon.type);
  return acc;
}, []);

export default types;
