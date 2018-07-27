import React from 'react';
import PropTypes from 'prop-types';
import helpers from '../../../helpers/helpers';

const Update = ({ update }) => {
  const { date } = update;
  const formattedDate = `${helpers.monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <hr />
      <p>
        {formattedDate}
      </p>
      <h3>
        {update.title}
      </h3>
      <p>
        {update.description}
      </p>
      <span>
        {`${update.comments} comments`}
      </span>
      <span>
        {`${update.likes} likes`}
      </span>
      <hr />
    </div>
  );
};

Update.propTypes = {
  update: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    comments: PropTypes.number,
    likes: PropTypes.number,
    backersOnly: PropTypes.bool,
  }).isRequired,
};

module.exports = Update;
