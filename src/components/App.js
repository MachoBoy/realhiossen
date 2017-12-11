import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import AccountPage from './AccountPage';
import Header from './Header';
import SideMenu from './SideMenu';
import { getUser } from '../actions';

class App extends Component {
  componentWillMount() {
    this.props.getUser();
  }

  render() {
    const { user } = this.props;
    if (user) {
      console.log('user logged in');
    } else {
      console.log('user is not there');
    }
    const Order = () => <div>order page</div>;
    const Contact = () => <div>Contact page</div>;
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Main} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    authenticated: state.auth.authenticated
  };
};

export default connect(null, { getUser })(App);
