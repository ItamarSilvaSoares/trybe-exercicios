import React from "react";
import Imagem from "./Imagem";

class Info extends React.Component {
  render() {
    const { name, type, averageWeight } = this.props.pokemon;
    return (
      <div className="info">
      <p>{name}</p>
      <p>{type}</p>
      <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
      <Imagem className='float' pokemon={this.props.pokemon} />
      </div>
    );
  }
}

export default Info;



