import React from 'react';
import monthNumberToString from '../../../helpers/monthNumberToString.js';

const Milestone = (props) => {
  const date = props.project.dateCreated;
  const formattedDate = `${monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <span>{formattedDate}</span>
      <h3>Project launched</h3>
    </div>
  )
};

module.exports = Milestone;
