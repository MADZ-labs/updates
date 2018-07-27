import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ month }) => (
  <span>
    {month}
  </span>
);

Divider.propTypes = {
  month: PropTypes.number.isRequired,
};

module.exports = Divider;
