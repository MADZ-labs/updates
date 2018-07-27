import React from 'react';
import PropTypes from 'prop-types';
import helpers from '../../../helpers/helpers';

const Milestone = ({ update, project }) => {
  let date = null;
  let message = null;
  if (!update) {
    date = project.dateCreated;
    message = 'Project launched';
  } else {
    date = project.endingDate;
    message = `Successfully raised ${project.moneyRaised} with ${project.backers} backers`;
  }
  const formattedDate = `${helpers.monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <span>
        {formattedDate}
      </span>
      <h3>
        {message}
      </h3>
    </div>
  );
};

Milestone.propTypes = {
  update: PropTypes.element,
  project: PropTypes.shape({
    dateCreated: PropTypes.instanceOf(Date),
    endingDate: PropTypes.instanceOf(Date),
    backers: PropTypes.string,
    moneyRaised: PropTypes.string,
    goal: PropTypes.string,
    updates: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      comments: PropTypes.number,
      likes: PropTypes.number,
      backersOnly: PropTypes.boolean,
    })),
  }).isRequired,
};

Milestone.defaultProps = {
  update: null,
};

module.exports = Milestone;
