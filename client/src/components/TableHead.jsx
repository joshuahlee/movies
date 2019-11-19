import React from 'react';

const TableHead = (props) => {

  console.log(props)
  const { onSort } = props;

  return (
    <thead>
      <tr>
        <th onClick={() => onSort("title")}>Title</th>
        <th onClick={() => onSort("genre.name")}>Genre</th>
        <th onClick={() => onSort("numberInStock")}>Stock</th>
        <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
  )

}

export default TableHead;