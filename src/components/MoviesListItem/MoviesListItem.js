import React from 'react';
import PropTypes from 'prop-types';

const MoviesListItem = ({ title }) => {
  return <li>{title}</li>;
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MoviesListItem;
