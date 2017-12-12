import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Segment, Header } from 'semantic-ui-react';
import { updateShippingAddress, inputOnChange } from '../actions';
import MessageBox from './common/messageBox';

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
      shippingFirstName,
      shippingLastName,
      shippingAddress,
      companyName,
      city,
      state,
      postalCode,
      shippingPhone
    } = this.props;

    this.props.updateShippingAddress({
      shippingFirstName,
      shippingLastName,
      shippingAddress,
      companyName,
      city,
      state,
      postalCode,
      shippingPhone
    });
  }

  render() {
    return (
      <div className="shippingForm">
        <Segment raised style={{ paddingLeft: '30px' }}>
          <Header as="h2" icon>
            Add Shipping Address
            <Header.Subheader />
          </Header>
          <div style={{ float: 'right' }}>
            <Button
              color="green"
              style={{ float: 'right' }}
              onClick={this.submitForm}
            >
              Save
            </Button>
          </div>
          {this.props.shippingAddressSaved ? (
            <MessageBox
              compact={true}
              icon="checkmark"
              success={true}
              header="Saved"
              content="Your fields were saved "
            />
          ) : null}

          <Form size="large">
            <Form.Group>
              <Form.Input
                width={6}
                name="shippingFirstName"
                label="Fisrt Name"
                value={this.props.shippingFirstName}
                onChange={this.handleOnChange.bind(this)}
              />

              <Form.Input
                width={6}
                name="shippingLastName"
                label="Last Name"
                value={this.props.shippingLastName}
                onChange={this.handleOnChange.bind(this)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                width={6}
                name="companyName"
                label="Company Name"
                value={this.props.companyName}
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
          </Form>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shippingFirstName: state.user.shippingFirstName,
    shippingLastName: state.user.shippingLastName,
    shippingAddress: state.user.shippingAddress,
    city: state.user.city,
    state: state.user.state,
    postalCode: state.user.postalCode,
    shippingPhone: state.user.shippingPhone,
    companyName: state.user.companyName,
    shippingAddressSaved: state.user.shippingAddressSaved
  };
};

export default connect(mapStateToProps, {
  updateShippingAddress,
  inputOnChange
})(ShippingForm);
