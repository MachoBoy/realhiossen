import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Segment, Header } from 'semantic-ui-react';
import { updateShippingAddress, inputOnChange } from '../actions';

// fields: Address, City, State, PostalCode, ShippingPhone

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  // handle onChange
  handleOnChange(event, data) {
    event.preventDefault();
    this.setState({ textInput: event.target.value });
    this.props.inputOnChange(data);
  }

  submitForm(e) {
    e.preventDefault();
    const {
      shippingAddress,
      city,
      state,
      postalCode,
      shippingPhone
    } = this.props;

    this.props.updateShippingAddress({
      shippingAddress,
      city,
      state,
      postalCode,
      shippingPhone
    });
  }

  render() {
    return (
      <div className="shippingForm">
        <Segment color="red">
          <Header as="h2" icon>
            Shipping Address
            <Header.Subheader />
          </Header>
          <Form size="large">
            <Form.Group>
              <Form.Input
                width={6}
                name="firstName"
                label="Fisrt Name"
                value={this.props.firstName}
                onChange={this.handleOnChange.bind(this)}
              />

              <Form.Input
                width={6}
                name="lastName"
                label="Last Name"
                value={this.props.lastName}
                onChange={this.handleOnChange.bind(this)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                width={6}
                name="compnayName"
                label="Company Name"
                value={this.props.lastName}
                onChange={this.handleOnChange.bind(this)}
              />
              <Form.Input
                width={8}
                name="shippingAddress"
                label="Shipping Address"
                value={this.props.shippingAddress}
                onChange={this.handleOnChange.bind(this)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                width={3}
                name="city"
                label="City"
                value={this.props.city}
                onChange={this.handleOnChange.bind(this)}
              />
              <Form.Input
                width={3}
                name="state"
                label="State"
                value={this.props.state}
                onChange={this.handleOnChange.bind(this)}
              />
              <Form.Input
                width={3}
                name="postalCode"
                label="Postal Code"
                value={this.props.postalCode}
                onChange={this.handleOnChange.bind(this)}
              />

              <Form.Input
                width={3}
                name="shippingPhone"
                label="Phone"
                value={this.props.shippingPhone}
                onChange={this.handleOnChange.bind(this)}
              />
            </Form.Group>
            <Button color="green" onClick={this.submitForm}>
              Save
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shippingAddress: state.user.shippingAddress,
    city: state.user.city,
    state: state.user.state,
    postalCode: state.user.postalCode,
    shippingPhone: state.user.shippingPhone
  };
};

export default connect(mapStateToProps, {
  updateShippingAddress,
  inputOnChange
})(ShippingForm);
