import React from 'react';
import { directors } from '../data';

const Directors = () => {
  
  const renderDirectors = () => {
    return directors.map(director => {
      const renderMovies = () => {
        return director.movies.map(movie => <li>{movie}</li>)
      }
      return <div>
        <h2>{director.name}</h2>
        <strong>Movies</strong>
        <ul>{renderMovies()}</ul>
      </div>
    })
  }
  
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
