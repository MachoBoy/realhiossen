import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Icon, Header } from 'semantic-ui-react';
import ProfileForm from './ProfileForm';
import ShippingForm from './ShippingForm';
import AddressBook from './AddressBook';
import LoaderDimmer from './common/loaderDimmer';

class AccountPage extends Component {
  render() {
    return (
      <div className="accountPage">
        <Segment size="large" textAlign="center" color="red">
          <Header as="h2" icon>
            <Icon name="user circle outline" />
            Account
            <Header.Subheader>
              Manage your account profile and shipping address
            </Header.Subheader>
          </Header>
        </Segment>
        <div className="profileContents" style={styles.profileContentsStyle}>
          <LoaderDimmer active={this.props.userloading} />
          <div
            className="addressBookContainer"
            style={styles.addressBookContainerStyle}
          >
            <AddressBook />
          </div>
          <div style={{ marginBottom: '15px', width: '60%', display: 'table' }}>
            <ProfileForm />
          </div>

          <div style={{ width: '60%' }}>
            <ShippingForm />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  profileContentsStyle: {
    position: 'relative'
  },
  addressBookContainerStyle: {
    width: '39%',
    float: 'right'
  }
};

const mapStateToProps = state => {
  return {
    userloading: state.user.userloading
  };
};

export default connect(mapStateToProps)(AccountPage);
