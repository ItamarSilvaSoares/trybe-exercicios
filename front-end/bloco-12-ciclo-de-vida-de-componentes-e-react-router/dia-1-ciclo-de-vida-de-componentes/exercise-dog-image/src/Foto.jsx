import React from 'react';
import PropType from 'prop-types';

class Foto extends React.Component {
  render() {
    const { dogObject } = this.props;
    return (
      <div>
        <img src={ dogObject.message } alt="foto de cachorro" />
      </div>
    );
  }
}

Foto.propTypes = {
  dogObject: PropType.objectOf(PropType.string).isRequired,
};

export default Foto;
