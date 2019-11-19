import React from 'react';

const ListEntry = ({ item, genreName, onGenreSelect, selectedItem }) => {

  return (
    <li className={item === selectedItem ? "list-group-item active" : "list-group-item"} onClick={() => onGenreSelect(item)}>
      {genreName}
    </li>
  )
}

export default ListEntry;