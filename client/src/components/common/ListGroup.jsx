import React from 'react';

const ListGroup = (props) => {
    const { items, textProperty, valueProperty, onGenreSelect, selectedItem } = props;

    return <ul className="list-group">
        {items.map(item =>
            <li 
            key={item[valueProperty]}
                className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                onClick={() => onGenreSelect(item)}
            >
                {item[textProperty]}
            </li>)}
    </ul>
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "._id"
}

export default ListGroup;