import React from 'react';

const Like = ({ movie, onLikeToggle, liked }) => {

  let classes = "fa fa-heart";
  if (!liked) {
    classes += "-o"
  }

  return (
    <i
      onClick={() => onLikeToggle(movie)}
      className={classes}
      aria-hidden="true"
    />
  )
}

export default Like;