import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DividerDiv = styled.div`
  margin: 50px auto;
  padding: 10px 0;
  color: #555;
  border: 1px solid #ddd;
  width: 85px;
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  background: white;
`;

const Divider = ({ month }) => (
  <DividerDiv>
    {month}
  </DividerDiv>
);

Divider.propTypes = {
  month: PropTypes.string.isRequired,
};

module.exports = Divider;
