import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import RegisterPage from './RegisterPage';
import AccountPage from './AccountPage';
import Header from './Header';
import SideMenu from './SideMenu';

class App extends Component {
  render() {
    const Order = () => <div>order page</div>;
    const Contact = () => <div>Contact page</div>;
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <SideMenu />
            <Route exact path="/" component={Main} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
