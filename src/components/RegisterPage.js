import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { registerUser } from '../actions';

class RegisterPage extends Component {
  render() {
    const { registerUser, registerFail, message, authenticated } = this.props;
    return (
      <div className="registerPage" style={{ background: 'red' }}>
        <div className="registerLogo" style={styles.registerFormStyle}>
          <h1>Need to apply companyLogo, Slogan, Background</h1>
        </div>
        <RegisterForm
          registerUser={registerUser}
          registerFail={registerFail}
          message={message}
          authenticated={authenticated}
        />
      </div>
    );
  }
}

const styles = {
  registerFormStyle: {
    background: 'green',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  }
};

const mapStateToProps = state => {
  return {
    registerFail: state.auth.registerFail,
    message: state.auth.message,
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps, { registerUser })(RegisterPage);
