import React from "react";
import data from "./data.js";
import Info from "./Info.jsx";

class Container extends React.Component {
  render() {
    return (
      <section className="container">
        {data.map(pokemon => (
            <Info key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    );
  }
}

export default Container;