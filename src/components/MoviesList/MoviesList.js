import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../constants';

import MoviesListItem from '../MoviesListItem/MoviesListItem';

import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.MoviesList}>
      {movies.map(movie => (
        <MoviesListItem
          key={movie.id}
          title={movie.title}
          id={movie.id}
          src={`${constants.imageDefaultURL}${movie.poster_path}`}
        />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default MoviesList;
