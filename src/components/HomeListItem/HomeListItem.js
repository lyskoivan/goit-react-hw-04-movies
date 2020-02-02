import React from 'react';
import PropTypes from 'prop-types';

const HomeListItem = ({ title }) => {
  return <li>{title}</li>;
};

HomeListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomeListItem;
