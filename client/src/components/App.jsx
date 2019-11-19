import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import ListGroup from './common/ListGroup.jsx'
import Pagination from './common/Pagination.jsx';
import paginate from './utils/paginate.js';
import { getGenres } from './../data/fakeGenreService.js';
import movieData from './../data/fakeMovieService.js';
import Movies from './movies.jsx'
import _ from 'lodash';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      pageSize: 3,
      currentPage: 1,
      selectedGenre: null,
      sortColumn: { path: 'title', order: 'asc' }
    }
  }

  componentDidMount() {
    const genres = [{ name: 'All' }, ...getGenres()]
    this.setState({ movies: movieData, genres: genres })
  }

  handleDelete = movie => {
    const editedMovies = this.state.movies.filter(mov => mov._id !== movie._id);
    this.setState({ movies: editedMovies })
  }

  // Toggling on and off the movie like button
  handleLikeToggle = movie => {
    const movies = [... this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page })
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }

  handleSort = path => {
    const sortColumn = {... this.state.sortColumn}
    if (sortColumn.path === path) {
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.setState({ sortColumn })
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state;

    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize)

    return (
      <main className="container">
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              onGenreSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <Movies
              movies={movies}
              filtered={filtered}
              onDelete={this.handleDelete}
              onLikeToggle={this.handleLikeToggle}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </main>
    );
  }
};

export default App;