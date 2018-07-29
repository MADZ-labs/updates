import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import helpers from '../../../helpers/helpers';

const Milestone = ({ update, project }) => {
  let bg = '';
  if (update && project.moneyRaised > project.goal) {
    bg = '#009E74';
  } else if (update && project.moneyRaised < project.goal) {
    bg = '#f55649';
  } else {
    bg = '#034752';
  }
  const MilestoneDiv = styled.div`
    margin: 50px auto;
    padding: 50px 25px;
    color: white;
    background: ${bg}
    width: 550px;
    text-align: center;
    font-family: sans-serif;
    > span {
      font-size: 14px;
    }
    > h3 {
      margin: 0;
      margin-top: ${!update ? '5px' : '20px'};
      padding: 0;
      font-family: ${!update ? 'EB Garamond' : 'sans-serif'};
      font-size: ${!update ? '36px' : '22px'};
      font-weight: normal;
    }
  `;
  let date = null;
  let message = null;
  if (update && project.moneyRaised > project.goal) {
    date = project.endingDate;
    message = `Successfully raised ${project.moneyRaised} with ${project.backers} backers`;
  } else if (update && project.moneyRaised < project.goal) {
    date = project.endingDate;
    message = `Project failed to raise goal of ${project.goal}`;
  } else {
    date = project.dateCreated;
    message = 'Project launched';
  }
  const formattedDate = `${helpers.monthNumberToString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <MilestoneDiv>
      <span>
        {formattedDate}
      </span>
      <h3>
        {message}
      </h3>
    </MilestoneDiv>
  );
};

Milestone.propTypes = {
  update: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    comments: PropTypes.number,
    likes: PropTypes.number,
    backers_only: PropTypes.bool,
  }),
  project: PropTypes.shape({
    date_created: PropTypes.instanceOf(Date),
    ending_date: PropTypes.instanceOf(Date),
    backers: PropTypes.number,
    money_raised: PropTypes.number,
    goal: PropTypes.number,
    updates: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      comments: PropTypes.number,
      likes: PropTypes.number,
      backers_only: PropTypes.bool,
    })),
  }).isRequired,
};

Milestone.defaultProps = {
  update: null,
};

module.exports = Milestone;
