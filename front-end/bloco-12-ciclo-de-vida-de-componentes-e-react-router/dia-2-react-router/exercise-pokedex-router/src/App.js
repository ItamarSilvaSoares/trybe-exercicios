import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">

      <h1> Pokedex </h1>
      <Route
        path="/"
        render={ (props) => <Pokedex { ...props } pokemons={ pokemons } /> }
      />

      <Route
        path="/pokemons/:id"
        render={ (porps) => (<PokemonDetails
          { ...porps }
          pokemons={ pokemons }
        />) }
      />

    </div>
  );
}

export default App;
