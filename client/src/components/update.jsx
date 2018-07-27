import React from 'react';
import helpers from '../../../helpers/helpers.js';

const Update = (props) => {
  const date = props.update.date;
  const formattedDate = `${helpers.monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;

  let desc = null;
  let backersOnly = null;
  if (!props.update.backersOnly) {
    desc = <p>
             {helpers.cutOffDesc(props.update.description)}
           </p>
  } else {
    backersOnly = <span>
                    For backers only
                  </span>
  };

  return (
    <div>
      <hr></hr>
      <p>{formattedDate}</p>
      <h3>{props.update.title}</h3>
      {desc}
      <span>{props.update.comments} comments</span>
      <span>{props.update.likes} likes</span>
      {backersOnly}
      <hr></hr>
    </div>
  )
};

module.exports = Update;
