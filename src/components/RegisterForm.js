import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Message, Button, Icon } from 'semantic-ui-react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleOnChange(name, e) {
    this.setState({ [name]: e.target.value });
  }

  handleRegister(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.registerUser({ email, password });
  }

  render() {
    if (this.props.authenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="registerForm" style={styles.registerFormStyle}>
        <div className="registerFields" style={styles.registerFieldsStyle}>
          <Form>
            {this.props.registerFail ? (
              <Message negative>
                <Icon name="warning circle" size="large" />
                {this.props.message}
              </Message>
            ) : null}

            <Form.Input
              label="Email*"
              placeholder="Email"
              onChange={e => this.handleOnChange('email', e)}
            />
            <Form.Input
              label="Password* (6 or more charaters)"
              placeholder="Password"
              type="password"
              onChange={e => this.handleOnChange('password', e)}
            />
            <div className="submitButton" style={styles.registerButtonStyle}>
              <Button primary onClick={this.handleRegister}>
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const styles = {
  registerFormStyle: {
    background: '#c8cfd9',
    width: '30%',
    height: '45%',
    borderRadius: '15px',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  },
  registerFieldsStyle: {
    position: 'relative',
    width: '70%',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    paddingTop: '30px'
  },
  registerButtonStyle: {
    textAlign: 'center'
  }
};

export default RegisterForm;
