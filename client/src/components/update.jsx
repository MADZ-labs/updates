import React from 'react';

const Update = (props) => {
  const date = props.update.date;
  const formattedDate = `${monthNumberToWord(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
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
