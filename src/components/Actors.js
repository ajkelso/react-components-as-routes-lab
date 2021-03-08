import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = () => {
    return actors.map(actor => {
      const renderMovies = () => {
        return actor.movies.map(movie => <li>{movie}</li>)
      }
      return <div>
        <h2>{actor.name}</h2>
        <strong>Movies</strong>
        <ul>{renderMovies()}</ul>
      </div>
    })
  }
  
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
