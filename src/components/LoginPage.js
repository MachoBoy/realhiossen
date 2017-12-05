import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import LoginForm from './LoginForm';

class LoginPage extends Component {
  render() {
    const { loginUser, authenticated } = this.props;
    return (
      <div>
        <LoginForm loginUser={loginUser} redirect={authenticated} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps, { loginUser })(LoginPage);
