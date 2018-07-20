import React from 'react';

const Update = (props) => {
  return (
    <div>
      <p>{props.update.date}</p>
      <h3>{props.update.title}</h3>
      <p>{props.update.description}</p>
      <span>{props.update.comments} comments</span>
      &nbsp;&nbsp;
      <span>{props.update.likes} likes</span>
      <hr></hr>
    </div>
  )
};

module.exports = Update;
