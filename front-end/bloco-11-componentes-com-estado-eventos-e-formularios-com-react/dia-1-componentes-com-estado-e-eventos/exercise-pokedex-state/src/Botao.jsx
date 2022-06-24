import React from 'react';
import PropType from 'prop-types';

class Botao extends React.Component {
  render() {
    const { tipo, onClick, lenght, className, disabled } = this.props;
    return (
      <div>
        <button
          className={ className }
          value={ lenght }
          type="button"
          onClick={ onClick }
          disabled={ disabled }
        >
          {tipo}

        </button>
      </div>
    );
  }
}

Botao.propTypes = {
  tipo: PropType.string.isRequired,
  onClick: PropType.func.isRequired,
  lenght: PropType.number.isRequired,
  className: PropType.string.isRequired,
  disabled: PropType.bool,
};

Botao.defaultProps = {
  disabled: false,
};

export default Botao;
