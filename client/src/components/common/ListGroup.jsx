import React from 'react';
import ListEntry from './ListEntry.jsx'

const ListGroup = (props) => {

  const { items, textProperty, valueProperty, onGenreSelect, selectedItem } = props;

  return (
    <ul className="list-group">
      {items.map(item => 
        <ListEntry 
          item={item}
          key={item[textProperty]} 
          valueProperty={valueProperty}
          selectedItem={selectedItem}
          onGenreSelect={onGenreSelect}
          genreName={item[textProperty]}
        />
      )}

    </ul>
  )
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "._id"
}

export default ListGroup;