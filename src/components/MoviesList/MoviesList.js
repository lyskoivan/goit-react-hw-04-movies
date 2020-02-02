import React from 'react';
import PropTypes from 'prop-types';

import MoviesListItem from '../MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <MoviesListItem key={movie.id} title={movie.title} />
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default MoviesList;
