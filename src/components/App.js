import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/main" component={Main} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
