import React from 'react';
import helpers from '../../../helpers/helpers.js';

const Milestone = (props) => {
  const date = props.project.dateCreated;
  const formattedDate = `${helpers.monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <span>{formattedDate}</span>
      <h3>Project launched</h3>
    </div>
  )
};

module.exports = Milestone;
