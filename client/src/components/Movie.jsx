import React from 'react';
import Like from './common/Like.jsx';

const Movie = (props) => {

  const { onDelete, movie, onLikeToggle } = props;

  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <Like liked={movie.liked} movie={movie} onLikeToggle={onLikeToggle} />
      </td>
      <td>
        <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
  )

}

export default Movie;