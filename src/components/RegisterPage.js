import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

class RegisterPage extends Component {
  render() {
    return (
      <div className="registerPage" style={{ background: 'red' }}>
        <div className="registerLogo" style={styles.registerFormStyle}>
          Hiossen로고 그리고 회사 슬로건
        </div>
        <RegisterForm />
      </div>
    );
  }
}

const styles = {
  registerFormStyle: {
    background: 'red',
    width: '70%',
    height: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  }
};

export default RegisterPage;
