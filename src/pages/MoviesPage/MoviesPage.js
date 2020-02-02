import React, { Component } from 'react';

import moviesAPI from '../../services/api';

import MoviesSearchForm from '../../components/MoviesSearchForm/MoviesSearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';

export default class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.getMovies();
    }
  }

  getMovies = () => {
    const { searchQuery } = this.state;

    moviesAPI
      .getMoviesByQuery(searchQuery)
      .then(data => this.setState({ movies: data.results }));
  };

  handleChangeSearchQuery = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchQuery, movies } = this.state;

    return (
      <div>
        <MoviesSearchForm onSubmit={this.handleChangeSearchQuery} />
        {searchQuery && <MoviesList movies={movies} />}
      </div>
    );
  }
}
