import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../actions';
import LoginForm from './LoginForm';
import LoaderDimmer from './common/loaderDimmer';

class LoginPage extends Component {
  render() {
    const {
      loginUser,
      registerUser,
      authenticated,
      loading,
      authFail,
      registerFail,
      message
    } = this.props;
    return (
      <div
        className="loginFormContainer"
        style={styles.loginFormContainerStyle}
      >
        <LoaderDimmer active={loading} />
        <LoginForm
          registerUser={registerUser}
          loginUser={loginUser}
          redirect={authenticated}
          loading={loading}
          authFail={authFail}
          registerFail={registerFail}
          message={message}
        />
      </div>
    );
  }
}

const styles = {
  loginFormContainerStyle: {}
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    loading: state.auth.loading,
    authFail: state.auth.authFail,
    registerFail: state.auth.registerFail,
    message: state.auth.message
  };
};

export default connect(mapStateToProps, { loginUser, registerUser })(LoginPage);
