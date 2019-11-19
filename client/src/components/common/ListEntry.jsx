import React from 'react';

const ListEntry = (props) => {

    const { item, genreName, onGenreSelect, selectedItem } = props;

    return (
        <li className={item === selectedItem ? "list-group-item active" : "list-group-item"} onClick={() => onGenreSelect(item)}>
            {genreName}
        </li>
    )
}


export default ListEntry;