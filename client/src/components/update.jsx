import React from 'react';
import PropTypes from 'prop-types';
import helpers from '../../../helpers/helpers';

const Update = ({ update }) => {
  const { date, backersOnly, description } = update;
  const formattedDate = `${helpers.monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;

  let desc = null;
  let backersOnlyDesc = null;
  if (!backersOnly) {
    desc = <p>
             {helpers.cutOffDesc(description)}
           </p>
  } else {
    backersOnlyDesc = <span>
                        For backers only
                      </span>
  };

  return (
    <div>
      <hr />
      <p>
        {formattedDate}
      </p>
      <h3>
        {update.title}
      </h3>
      {desc}
      <span>
        {`${update.comments} comments`}
      </span>
      <span>
        {`${update.likes} likes`}
      </span>
      {backersOnlyDesc}
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
