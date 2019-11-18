import React from 'react';
import Like from './common/Like.jsx';

class Movie extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <tr>
            <td>{this.props.movie.title}</td>
            <td>{this.props.movie.genre.name}</td>
            <td>{this.props.movie.numberInStock}</td>
            <td>{this.props.movie.dailyRentalRate}</td>
            <td>
                <Like liked={this.props.movie.liked} movie={this.props.movie} onLikeToggle={this.props.onLikeToggle}/>
            </td>
            <td>
              <button onClick={() => this.props.onDelete(this.props.movie)} className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        );
    }
}

export default Movie;