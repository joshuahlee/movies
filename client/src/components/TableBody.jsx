import React from 'react';
import Movie from './Movie.jsx'

const TableBody = (props) => {

  const { movies, onDelete, onLikeToggle } = props;

  return (
    <tbody>
      {movies.map(movie =>
        <Movie
          key={movie._id}
          movie={movie}
          onDelete={onDelete}
          onLikeToggle={onLikeToggle}
        />
      )}
    </tbody>
  )

}

export default TableBody;
