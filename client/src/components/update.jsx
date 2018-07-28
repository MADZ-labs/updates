import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import helpers from '../../../helpers/helpers';

const UpdateDiv = styled.div`
  margin: 50px auto;
  padding: 25px;
  width: 50%;
  text-align: center;
  font-family: sans-serif;
  background: white;
  > * {
    color: #2b2727;
  }
  > span:nth-child(1) {
    font-weight: bold;
  }
  > span {
    padding: 0 10px;
    font-size: 14px;
  }
  > h3 {
    display: table;
    margin: 10px auto;
    padding: 0 5px;
    font-family: 'EB Garamond', serif;
    font-size: 36px;
  }
  > p {
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
    > h3 {
      background: #ffc29e;
    }
  }
  > #backersSpan {
    font-weight: bold;
  }
`;

const Update = ({ update }) => {
  const { date, backersOnly, description } = update;
  const formattedDate = `${helpers.monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;

  let desc = null;
  let backersOnlyDesc = null;
  const shortDescription = helpers.cutOffDesc(description);
  if (!backersOnly && shortDescription.length === description.length) {
    desc = (
      <p>
        {description}
      </p>
    );
  } else if (!backersOnly && shortDescription.length !== description.length) {
    desc = (
      <p>
        {shortDescription}
        <span style={{ textDecoration: 'underline' }}>
          Read more
        </span>
      </p>
    );
  } else {
    backersOnlyDesc = (
      <span id="backersSpan">
        For backers only
      </span>
    );
  }

  let comments = null;
  if (update.comments > 0) {
    comments = (
      <span>
        {`${update.comments} comments`}
      </span>
    );
  }

  let likes = null;
  if (update.likes > 0) {
    likes = (
      <span>
        {`${update.likes} likes`}
      </span>
    );
  }

  return (
    <UpdateDiv>
      <span>
        {formattedDate}
      </span>
      <h3>
        {update.title}
      </h3>
      {desc}
      {comments}
      {likes}
      {backersOnlyDesc}
    </UpdateDiv>
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
