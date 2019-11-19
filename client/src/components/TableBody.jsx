import React from 'react';

class TableBody extends React.Component {

  renderCell = (movie, column) => {
    if (column.content) {
      return column.content(movie)
    } else {
      return _.get(movie, column.path)
    }
  }
  
  createKey = (movie, column) => {
    return movie._id + (column.path || column.key);
  }

  render () {
    const { movies, columns } = this.props;
  
    return (
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            {columns.map(column => (
              <td key={this.createKey(movie, column)}>
                {this.renderCell(movie, column)}
              </td>
            ))}
         </tr>
        ))}
      </tbody>
    )
  }

}

export default TableBody;