import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Segment,
  Icon,
  Header,
  Button,
  Form,
  Message
} from 'semantic-ui-react';
import { updateUserProfile, inputOnChange, fetchUserProfile } from '../actions';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ableEdit: true
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserProfile();
  }

  // submit the profile data
  handleOnSubmit(e) {
    e.preventDefault();
    const { customerCode, firstName, lastName, phone } = this.props;
    this.props.updateUserProfile({
      customerCode,
      firstName,
      lastName,
      phone
    });
    this.setState({ ableEdit: true });
  }

  // profile fields on change
  handleOnChange(event, data) {
    event.preventDefault();
    this.props.inputOnChange(data);
  }

  // handle Edit Button
  handleEdit(e) {
    e.preventDefault();
    this.setState({ ableEdit: false });
  }

  render() {
    return (
      <div className="accountForm">
        <Segment raised style={{ paddingLeft: '30px' }}>
          <Header as="h2" icon>
            Account Profile Details
            <Header.Subheader />
          </Header>
          <div style={{ float: 'right' }}>
            {this.state.ableEdit ? (
              <Button color="yellow" onClick={this.handleEdit}>
                Edit
              </Button>
            ) : (
              <Button color="green" onClick={this.handleOnSubmit}>
                Save
              </Button>
            )}
          </div>
          {this.props.profileSaved ? (
            <Message
              compact
              icon="checkmark"
              success
              header="Saved"
              content="Your fields were saved "
            />
          ) : null}

          <Form loading={this.props.asyncLoading} size="large">
            <Form.Input
              width={3}
              name="customerCode"
              label="Customer Code"
              readOnly
              value={this.props.customerCode}
              onChange={this.handleOnChange.bind(this)}
            />
            <Form.Group>
              <Form.Input
                width={6}
                name="firstName"
                label="Fisrt Name"
                readOnly={this.state.ableEdit}
                value={this.props.firstName}
                onChange={this.handleOnChange.bind(this)}
              />

              <Form.Input
                width={6}
                name="lastName"
                label="Last Name"
                readOnly={this.state.ableEdit}
                value={this.props.lastName}
                onChange={this.handleOnChange.bind(this)}
              />
            </Form.Group>

            <Form.Input
              width={3}
              name="phone"
              label="Phone"
              readOnly={this.state.ableEdit}
              value={this.props.phone}
              onChange={this.handleOnChange.bind(this)}
            />
          </Form>
        </Segment>
      </div>
    );
  }
}

const styles = {};

const mapStateToProps = state => {
  return {
    customerCode: state.user.customerCode,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    phone: state.user.phone,
    userInfo: state.user,
    asyncLoading: state.user.loading,
    profileSaved: state.user.profileSaved
  };
};

export default connect(mapStateToProps, {
  updateUserProfile,
  inputOnChange,
  fetchUserProfile
})(ProfileForm);
