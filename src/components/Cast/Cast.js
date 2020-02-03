import React, { Component } from 'react';

import styles from './Cast.module.css';

import movieAPI from '../../services/api';

const getIdFromProps = props => props.match.params.movieId;

export default class Cast extends Component {
  state = {
    movieCast: [],
  };

  componentDidMount() {
    this.getMovieCast();
  }

  getMovieCast = () => {
    const id = getIdFromProps(this.props);

    movieAPI
      .getMvoieCredits(id)
      .then(data => this.setState({ movieCast: data.cast }));
  };

  render() {
    const { movieCast } = this.state;

    return (
      <>
        {movieCast.length > 0 ? (
          <ul className={styles.CastList}>
            {movieCast.map(cast => (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt=""
                />
                <p>{cast.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We dont have info about cast for this movie</p>
        )}
      </>
    );
  }
}
