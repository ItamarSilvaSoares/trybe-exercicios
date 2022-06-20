import React from "react";

class Imagem extends React.Component {
  render() {
    return (
        <>
            <img src={this.props.pokemon.image} alt={this.props.pokemon.name} />
        </>
    )
  }
}

export default Imagem;