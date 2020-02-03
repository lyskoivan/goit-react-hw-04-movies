import React, { Component } from 'react';

import movieAPI from '../../services/api';

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
      .then(reviews => this.setState({ movieReviews: reviews.results }));
  };

  render() {
    const { movieReviews } = this.state;

    return (
      <>
        {movieReviews.length > 1 ? (
          <ul>
            {movieReviews.map(review => (
              <li key={review.id}>{review.content}</li>
            ))}
          </ul>
        ) : (
          <p>We dont have any review for this movie</p>
        )}
      </>
    );
  }
}
