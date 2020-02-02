import React from 'react';
import PropTypes from 'prop-types';

import HomeListItem from '../HomeListItem/HomeListItem';

const HomeList = ({ popularMovies }) => {
  return (
    <div>
      <ul>
        {popularMovies.map(movie => (
          <HomeListItem key={movie.id} title={movie.title} />
        ))}
      </ul>
    </div>
  );
};

HomeList.propTypes = {
  popularMovies: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default HomeList;
