import React from 'react';
import TableHead from './common/TableHead.jsx';
import TableBody from './TableBody.jsx';
import Like from './common/Like.jsx';

class Movies extends React.Component {

  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => (
        <Like liked={movie.liked} movie={movie} onLikeToggle={this.props.onLikeToggle}/>
      )
    },
    {
      key: 'delete',
      content: movie => (
        <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
      )
    }
  ];

  render() {
    const { filtered, sortColumn, movies, onSort, onDelete, onLikeToggle } = this.props;

    return (
      <React.Fragment>
        <p>Showing {filtered.length} movies in the database.</p>
        <table className="table">
          <TableHead
            columns={this.columns}
            onSort={onSort}
            sortColumn={sortColumn}
          />
          <TableBody
            movies={movies}
            onDelete={onDelete}
            onLikeToggle={onLikeToggle}
            columns={this.columns}
          />
        </table>
      </React.Fragment>
    )

  }
}



export default Movies;