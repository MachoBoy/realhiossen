import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import RegisterForm from './RegisterForm';
import { registerUser } from '../actions';

class RegisterPage extends Component {
  render() {
    const { registerUser, registerFail, message, authenticated } = this.props;
    return (
      <div className="registerPage" style={{ background: '#393B51' }}>
        <div className="registerLogo" style={styles.registerFormStyle}>
          <Image
            src={require('../img/hiossenLogo.jpg')}
            style={styles.logoStyle}
            label="The solutions you need in just one place"
          />
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
    paddingTop: '35px',
    background: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  },
  logoStyle: {
    width: '30%',
    display: 'block',
    margin: '0 auto'
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
