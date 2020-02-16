import React, { Component } from 'react';

import styles from './Cast.module.css';

import movieAPI from '../../services/api';

import constants from '../../constants';

import CastItem from '../CastItem/CastItem';

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
      .then(({ cast }) => this.setState({ movieCast: cast }));
  };

  render() {
    const { movieCast } = this.state;
    return (
      <>
        {movieCast.length > 0 ? (
          <ul className={styles.CastList}>
            {movieCast.map(cast => (
              <CastItem
                key={cast.id}
                name={cast.name}
                character={cast.character}
                src={`${constants.imageDefaultURL}${cast.profile_path}`}
              />
            ))}
          </ul>
        ) : (
          <p>We dont have info about cast for this movie</p>
        )}
      </>
    );
  }
}
