import React from 'react';
import pokemons from '../data';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, image, averageWeight } = this.props;
    return (
      <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      <img src={image} alt='pokemon'></img>
      </div>
    )
  }
}

// depois fazer isso dinamicamente com um map para todos os pokemons

export default Pokemon;