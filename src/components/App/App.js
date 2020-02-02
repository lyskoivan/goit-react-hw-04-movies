import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header/Header';

import HomePgae from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';

class App extends Component {
  func = () => {
    return 12;
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePgae} />
          <Route path="/movies" component={MoviesPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
