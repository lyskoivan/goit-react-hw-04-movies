import React, { Component } from 'react';

import moviesAPI from '../../services/api';

import HomeList from '../../components/HomeList/HomeList';

export default class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    moviesAPI
      .getPopularMovies()
      .then(data => this.setState({ popularMovies: data.results }));
  }

  render() {
    const { popularMovies } = this.state;
    return (
      <div>
        <HomeList popularMovies={popularMovies} />
      </div>
    );
  }
}
