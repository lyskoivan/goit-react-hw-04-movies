import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import MovieDetailsArticle from '../MovieDetailsArticle/MovieDetailsArticle';

import styles from './MovieDetails.module.css';

const MovieDetails = ({ movie, match, history, location }) => {
  const handleGoBack = () => {
    const { state } = location;

    if (state) {
      history.push(location.state.from);
      return;
    }

    history.push('/movies');
  };

  return (
    <>
      <section className={styles.movieDetails}>
        <button
          type="button"
          className={styles.movieDetails__button}
          onClick={handleGoBack}
        >
          Go back
        </button>
        <MovieDetailsArticle movie={movie} />
        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>reviews</NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};

export default withRouter(MovieDetails);
