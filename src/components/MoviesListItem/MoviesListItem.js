import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MoviesListItem = ({ title, id }) => {
  return (
    <li>
      <NavLink to={`movies/${id}`}>{title}</NavLink>
    </li>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MoviesListItem;
