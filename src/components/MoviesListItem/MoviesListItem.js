import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import API from '../../services/api';

import styles from './MoviesListItem.module.css';

const MoviesListItem = ({ title, id, src, location }) => {
  return (
    <li className={styles.MoviesList__item}>
      <img
        src={`${API.imageDefaultURL}${src}`}
        alt=""
        className={styles.MoviesList__img}
      />
      <Link
        to={{
          pathname: `movies/${id}`,
          state: { from: location },
        }}
        className={styles.MoviesList__link}
      >
        {title}
      </Link>
    </li>
  );
};

MoviesListItem.defaultProps = {
  src: '',
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  src: PropTypes.string,
  location: PropTypes.shape().isRequired,
};

export default withRouter(MoviesListItem);
