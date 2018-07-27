import React from 'react';
import helpers from '../../../helpers/helpers.js';

const Milestone = (props) => {
  let date = null;
  let message = null;
  if (!props.update) {
    date = props.project.dateCreated;
    message = 'Project launched';
  } else {
    date = props.project.endingDate;
    message = `Successfully raised ${props.project.moneyRaised} with ${props.project.backers} backers`;
  };
  const formattedDate = `${helpers.monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <span>{formattedDate}</span>
      <h3>{message}</h3>
    </div>
  )
};

module.exports = Milestone;
