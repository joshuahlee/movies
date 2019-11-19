import React from 'react';

const Like = props => {

  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o"
  }

  const { movie, onLikeToggle } = props;

  return (
    <i
      onClick={() => onLikeToggle(movie)}
      className={classes}
      aria-hidden="true"
    />
  )
  
}

export default Like;