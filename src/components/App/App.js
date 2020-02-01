import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';

import HomePgae from '../../pages/HomePage/HomePage';

class App extends Component {
  func = () => {
    return 12;
  };

  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={HomePgae} />
      </div>
    );
  }
}

export default App;
