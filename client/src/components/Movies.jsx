import React from 'react';
import TableHead from './TableHead.jsx';
import TableBody from './TableBody.jsx';

const Movies = (props) => {

  const { filtered, movies, onDelete, onLikeToggle, onSort } = props;

  return (
    <React.Fragment>
      <p>Showing {filtered.length} movies in the database.</p>
      <table className="table">
        <TableHead 
          onSort={onSort}
        />
        <TableBody
          movies={movies}
          onDelete={onDelete}
          onLikeToggle={onLikeToggle}
        />
      </table>
    </React.Fragment>
  )

}

export default Movies;