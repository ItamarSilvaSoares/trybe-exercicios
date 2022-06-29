import React from 'react';
import './App.css';
import Foto from './Foto';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogObject: {},
      status: false,
      dogs: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate(_nextProps, { dogObject }) {
    const { message } = dogObject;
    return !message.includes('terrier');
  }

  componentDidUpdate(_prevProps, { dogObject: { message } }) {
    localStorage.setItem('image', JSON.stringify(message));
    console.log(message);
  }

fetchData = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const result = await fetch(url);
  const dados = await result.json();
  this.setState({ dogObject: dados, status: true });
}

saveDog = () => {
  this.setState(({ dogObject, dogs }) => ({
    dogs: [...dogs, dogObject],
    status: false,
  }));
  this.fetchData();
}

render() {
  const { status } = this.state;

  return (
    <div className="App">
      { status ? <Foto { ...this.state } /> : <p>carregando</p> }
      <button type="button" onClick={ this.saveDog }> cãozinho </button>
    </div>
  );
}
}

export default App;
