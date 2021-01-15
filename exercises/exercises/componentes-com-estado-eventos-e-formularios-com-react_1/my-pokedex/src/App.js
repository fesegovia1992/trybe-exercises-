import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';


class App extends React.Component {
  render() {
    return (
      <main className="App">
      <Pokedex pokemons={pokemons}/>
      <button onClick={this.nextPokemon}>Next Pokemon</button>
    </main>
    );
  }
}

export default App;
