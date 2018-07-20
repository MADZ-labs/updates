import React from 'react';

const Milestone = (props) => {
  return (
    <div>
      <span>{props.project.dateCreated}</span>
      <h3>Proejct launched</h3>
    </div>
  )
};

module.exports = Milestone;
