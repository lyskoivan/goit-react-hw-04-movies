import React, { Component } from 'react';

import moviesAPI from '../../services/api';

const getIdFromProps = props => props.match.params.movieId;

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    this.getMovie(id);
  }

  getMovie = id => {
    moviesAPI.getMovieById(id).then(movie => this.setState({ movie }));
  };

  render() {
    const { movie } = this.state;

    return <div>{movie && <h2>{movie.title}</h2>}</div>;
  }
}

export default MovieDetailsPage;
