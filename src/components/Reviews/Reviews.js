import React, { Component } from 'react';

import movieAPI from '../../services/api';

import ReviewsItem from '../ReviewsItem/ReviewsItem';

import styles from './Reviews.module.css';

const getIdFromProps = props => props.match.params.movieId;

export default class Reviews extends Component {
  state = {
    movieReviews: [],
  };

  componentDidMount() {
    this.getReviews();
  }

  getReviews = () => {
    const id = getIdFromProps(this.props);

    movieAPI
      .getMvoieReviews(id)
      .then(({ results }) => this.setState({ movieReviews: results }));
  };

  render() {
    const { movieReviews } = this.state;

    return (
      <>
        {movieReviews.length > 0 ? (
          <ul className={styles.ReviewsList}>
            {movieReviews.map(review => (
              <ReviewsItem
                key={review.id}
                author={review.author}
                content={review.content}
              />
            ))}
          </ul>
        ) : (
          <p>We dont have any review for this movie</p>
        )}
      </>
    );
  }
}
