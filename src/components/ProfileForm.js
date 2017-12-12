import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Button, Form } from 'semantic-ui-react';
import { updateUserProfile, inputOnChange, fetchUserProfile } from '../actions';
import MessageBox from './common/messageBox';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ableEdit: true
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
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
    console.log(this.props.userInfo);
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
            <MessageBox
              compact={true}
              icon="checkmark"
              success={true}
              header="Saved"
              content="Your fields were saved "
            />
          ) : null}

          <Form size="large">
            <Form.Input
              width={3}
              name="customerCode"
              label="Customer Code"
              readOnly
              value={this.props.customerCode || ''}
              onChange={this.handleOnChange.bind(this)}
            />
            <Form.Group>
              <Form.Input
                width={6}
                name="firstName"
                label="Fisrt Name"
                readOnly={this.state.ableEdit}
                value={this.props.userInfo.firstName}
                onChange={this.handleOnChange.bind(this)}
              />

              <Form.Input
                width={6}
                name="lastName"
                label="Last Name"
                readOnly={this.state.ableEdit}
                value={this.props.userInfo.lastName}
                onChange={this.handleOnChange.bind(this)}
              />
            </Form.Group>

            <Form.Input
              width={3}
              name="phone"
              label="Phone"
              readOnly={this.state.ableEdit}
              value={this.props.userInfo.phone}
              onChange={this.handleOnChange.bind(this)}
            />
          </Form>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profileSaved: state.user.profileSaved,
    userInfo: state.user.userInfo
  };
};

export default connect(mapStateToProps, {
  updateUserProfile,
  inputOnChange,
  fetchUserProfile
})(ProfileForm);
