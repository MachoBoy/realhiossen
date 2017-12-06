import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';

// {/*       customer code
//           First Name
//           Last Name
//           Email address
//           password
//           address
//           contact number */}

class RegisterForm extends Component {
  render() {
    return (
      <div className="registerForm" style={styles.registerFormStyle}>
        <Form>
          <Form.Input label="Customer Code" placeholder="Customer Code" />

          <Form.Input label="First name" placeholder="First name" />
          <Form.Input label="Last name" placeholder="Last name" />

          <Form.Input label="Email" placeholder="Email" />
          <Form.Input
            label="Password (6 or more charaters)"
            placeholder="Password"
          />

          <Form.Input label="Address" placeholder="Address" />
          <Form.Input label="Contact Number" placeholder="Contact Number" />

          <Button primary>Submit</Button>
        </Form>
      </div>
    );
  }
}

const styles = {
  registerFormStyle: {
    background: 'blue',
    width: '50%',
    height: '85%',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  }
};

export default RegisterForm;
