import React, { Component } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
      </div>
    );
  }
}

export default Main;
