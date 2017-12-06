import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Main from './Main';
import RegisterPage from './RegisterPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/register" component={RegisterPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
