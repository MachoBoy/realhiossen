// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Icon, Header, Button, Card, Input } from 'semantic-ui-react';
import {
  updateUserProfile,
  profileOnChange,
  fetchUserProfile
} from '../actions';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ableEdit: true,
      customerCode: '',
      firstName: 'jiwon',
      lastName: 'park',
      email: '',
      phone: '',
      address: ''
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserProfile();
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const {
      customerCode,
      firstName,
      lastName,
      email,
      phone,
      address
    } = this.state;
    this.state.updateUserProfile({
      customerCode,
      firstName,
      lastName,
      email,
      phone,
      address,
      uid: this.props.userInfo.uid
    });
    this.setState({ ableEdit: true });
  }

  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // handle Edit Button
  handleEdit(e) {
    e.preventDefault();
    this.setState({ ableEdit: false });
  }

  render() {
    console.log('state', this.state);
    console.log('props', this.props);

    return (
      <div className="accountForm">
        <Segment>
          <Icon name="user" size="huge" />
          <div style={styles.headerStyle}>
            <Header size="large">Account</Header>
          </div>

          <div style={styles.cardStyle}>
            <Card fluid>
              <div>
                {this.state.ableEdit ? (
                  <Button
                    color="yellow"
                    style={styles.editButtonStyle}
                    onClick={this.handleEdit}
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    color="green"
                    style={styles.editButtonStyle}
                    onClick={this.handleOnSubmit}
                  >
                    Save
                  </Button>
                )}
              </div>
              <div style={styles.inputStyle}>
                <Input
                  style={{ marginTop: '15px', marginBottom: '15px' }}
                  readOnly={this.state.ableEdit}
                  label="Customer Code"
                  value={this.props.userInfo.customerCode}
                  fluid
                  onChange={this.handleOnChange.bind(this)}
                />
                <Input
                  style={{ marginTop: '15px', marginBottom: '15px' }}
                  readOnly={this.state.ableEdit}
                  label="First Name"
                  value={this.props.userInfo.firstName}
                  fluid
                  onChange={this.handleOnChange.bind(this)}
                />
                <Input
                  style={{ marginTop: '15px', marginBottom: '15px' }}
                  readOnly={this.state.ableEdit}
                  label="Last Name"
                  value={this.props.userInfo.lastName}
                  fluid
                  onChange={this.handleOnChange.bind(this)}
                />
                <Input
                  style={{ marginTop: '15px', marginBottom: '15px' }}
                  readOnly={this.state.ableEdit}
                  label="Email"
                  value={this.props.userInfo.email}
                  fluid
                  onChange={this.handleOnChange.bind(this)}
                />
                <Input
                  style={{ marginTop: '15px', marginBottom: '15px' }}
                  readOnly={this.state.ableEdit}
                  label="Phone"
                  value={this.props.userInfo.phone}
                  fluid
                  onChange={this.handleOnChange.bind(this)}
                />
              </div>
            </Card>
          </div>
        </Segment>
      </div>
    );
  }
}

const styles = {
  headerStyle: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  editButtonStyle: {
    float: 'right',
    marginRight: '15px'
  },
  cardStyle: {
    marginTop: '30px',
    marginLeft: '50px'
  },
  inputStyle: {
    width: '50%',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  }
};

const mapStateToProps = state => {
  return {
    customerCode: state.user.customerCode,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    phone: state.user.phone,
    address: state.user.address,
    userInfo: state.user
  };
};

export default connect(mapStateToProps, {
  updateUserProfile,
  profileOnChange,
  fetchUserProfile
})(AccountForm);
