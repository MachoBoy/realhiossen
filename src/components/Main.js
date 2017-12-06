import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Main extends Component {
  render() {
    return (
      <div className="mainContainer" style={styles.mainStyle}>
        <Dashboard />
      </div>
    );
  }
}

const styles = {
  mainStyle: {
    width: '79%',
    float: 'right'
  }
};
export default Main;
