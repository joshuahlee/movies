import React from 'react';
import movieData from './../data/fakeMovieService.js';
import Movies from './Movies.jsx';
import Nav from './Nav.jsx';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class App extends React.Component {
  constructor (props) {
    super (props);
  }
  render() {
    return (
      <main className="container">
        <Movies movies={movieData}/>
      </main>
    );
  }
};

export default App;