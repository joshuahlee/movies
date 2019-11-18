import React from 'react';

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o"
  }
  return (
    <i
      onClick={() => props.onLikeToggle(props.movie.like)}
      className={classes}
      aria-hidden="true"
    />
  )
}

export default Like;