import React from 'react';

const Milestone = (props) => {
  const date = props.project.dateCreated;
  const formattedDate = `${monthNumberToWord(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <span>{formattedDate}</span>
      <h3>Project launched</h3>
    </div>
  )
};

const monthNumberToWord = (num) => {
  if (num === 0) {
    return 'January'
  } else if (num === 1) {
    return 'February'
  } else if (num === 2) {
    return 'March'
  } else if (num === 3) {
    return 'April'
  } else if (num === 4) {
    return 'May'
  } else if (num === 5) {
    return 'June'
  } else if (num === 6) {
    return 'July'
  } else if (num === 7) {
    return 'August'
  } else if (num === 8) {
    return 'September'
  } else if (num === 9) {
    return 'October'
  } else if (num === 10) {
    return 'November'
  } else {
    return 'December'
  };
};

module.exports = Milestone;
