import React, { Component } from 'react';
import { Button, Form, Segment, Message, Icon, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleOnChange(name, e) {
    this.setState({ [name]: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  }

  handleRegister(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.registerUser({ email, password });
  }

  render() {
    console.log(this.props.registerUser);
    if (this.props.redirect) {
      return <Redirect to="/" />;
    }
    const { email, password } = this.state;
    return (
      <Form size="big">
        <Segment stacked>
          <Image
            src={require('../img/hiossenLogo.jpg')}
            style={styles.headerImgStyle}
          />
          {this.props.authFail ? (
            <Message negative>
              <Icon name="warning circle" size="large" />
              {this.props.message}
            </Message>
          ) : null}
          {this.props.registerFail ? (
            <Message negative>
              <Icon name="warning circle" size="large" />
              {this.props.message}
            </Message>
          ) : null}
          <Form.Input
            fluid
            placeholder="Email"
            icon="mail"
            iconPosition="left"
            value={email}
            onChange={e => this.handleOnChange('email', e)}
          />
          <Form.Input
            fluid
            placeholder="Password"
            icon="lock"
            iconPosition="left"
            type="password"
            value={password}
            onChange={e => this.handleOnChange('password', e)}
          />
          <div className="submitButton" style={styles.buttonStyle}>
            <Button style={{ width: '80%' }} primary onClick={this.handleLogin}>
              Login
            </Button>

            <Button color="green" floated="right" onClick={this.handleRegister}>
              Register
            </Button>
          </div>
        </Segment>
      </Form>
    );
  }
}

const styles = {
  headerImgStyle: {
    width: '200px',
    paddingBottom: '30px'
  },

  buttonStyle: {
    marginTop: '20px'
  }
};

export default LoginForm;
