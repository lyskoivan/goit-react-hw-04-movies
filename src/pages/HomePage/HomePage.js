import React, { Component } from 'react';

import HomeList from '../../components/HomeList/HomeList';

export default class HomePage extends Component {
  func = () => {
    return 12;
  };

  render() {
    return (
      <div>
        <HomeList />
      </div>
    );
  }
}
