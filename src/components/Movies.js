import React from 'react';
import { movies } from '../data';



const Movies = () => {
  const renderMovies = () => { 
  
    return movies.map(movie => {
      const renderGenres = () => {
        return movie.genres.map(genre => <li>{genre}</li>)
      }
      return <div>
        <h3>Title: {movie.title}</h3>
        <p>Time: {movie.time} </p>
        <strong>Genres</strong>
        <ul>
          {renderGenres()}
        </ul>
      </div>
    })
  } 

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
