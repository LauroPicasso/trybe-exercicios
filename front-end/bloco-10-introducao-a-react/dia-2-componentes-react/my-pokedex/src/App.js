import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Components/Pokemon';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <Pokemon id='id' name='name' type='type' averageWeight='averageWeight' image='image' />
      </div>
    )
  }
}

export default App;
