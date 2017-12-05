import React, { Component } from 'react';
import {
  Button,
  Form,
  Segment,
  Message,
  Icon,
  Image,
  Divider
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleOnChange(name, e) {
    this.setState({ [name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  }

  render() {
    if (this.props.redirect) {
      return <Redirect to="/main" />;
    }
    return (
      <div className="LoginForm" style={styles.loginFormStyle}>
        <Form size="large">
          <Segment stacked>
            <Image
              src={require('../img/hiossenLogo.jpg')}
              style={styles.headerImgStyle}
            />
            <Form.Input
              fluid
              placeholder="Email"
              icon="user"
              iconPosition="left"
              value={this.state.email}
              onChange={e => this.handleOnChange('email', e)}
            />
            <Form.Input
              fluid
              placeholder="password"
              icon="lock"
              iconPosition="left"
              type="password"
              value={this.state.password}
              onChange={e => this.handleOnChange('password', e)}
            />
            <div className="submitButton" style={styles.buttonStyle}>
              <Button primary onClick={this.onSubmit}>
                Login
              </Button>

              <Button secondary style={{ float: 'right' }}>
                Register
              </Button>
            </div>
          </Segment>
        </Form>
      </div>
    );
  }
}

const styles = {
  headerImgStyle: {
    width: '200px',
    paddingBottom: '30px'
  },

  loginFormStyle: {
    width: '500px',
    margin: 'auto'
  },

  buttonStyle: {
    marginTop: '20px'
  }
};

export default LoginForm;
