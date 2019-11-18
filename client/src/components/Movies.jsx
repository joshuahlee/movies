import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movie from './Movie.jsx'
import ListGroup from './common/ListGroup.jsx'
import Pagination from './common/Pagination.jsx';
import paginate from './utils/paginate.js';
import { getGenres } from './../data/fakeGenreService.js';

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      pageSize: 3,
      currentPage: 1,
      selectedGenre: null,
      liked: false
    }
  }

  componentDidMount() {
    console.log(getGenres(), genres)
    const genres = [{name: 'All'}, ... getGenres()]
    this.setState({ movies: this.props.movies, genres: genres})
  }

  handleDelete = movie => {
    const editedMovies = this.state.movies.filter(mov => mov._id !== movie._id);
    this.setState({ movies: editedMovies })
  }

  handleLikeToggle = (movie) => {
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
    this.setState({selectedGenre: genre})
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies, selectedGenre} = this.state;

    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }

    const filtered = selectedGenre ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

    const movies = paginate(filtered, currentPage, pageSize)
  

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup 
          items={this.state.genres} 
          onGenreSelect={this.handleGenreSelect}
          selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
        <p>Showing {filtered.length} movies in the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie =>
                <Movie
                  movie={movie}
                  key={movie._id}
                  onDelete={() => this.handleDelete(movie)}
                  onLikeToggle={() => this.handleLikeToggle(movie)}
                />
              )}
            </tbody>
          </table>
         <Pagination itemsCount={filtered.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
        </div>
      </div>
    )
  }
}

export default Movies;