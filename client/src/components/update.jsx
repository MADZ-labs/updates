import React from 'react';
import helpers from '../../../helpers/helpers.js';

const Update = (props) => {
  const date = props.update.date;
  const formattedDate = `${helpers.monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <hr></hr>
      <p>{formattedDate}</p>
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
