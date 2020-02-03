import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const MoviesListItem = ({ title, id, location }) => {
  return (
    <li>
      <Link
        to={{
          pathname: `movies/${id}`,
          state: { from: location },
        }}
      >
        {title}
      </Link>
    </li>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.shape().isRequired,
};

export default withRouter(MoviesListItem);
