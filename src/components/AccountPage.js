import React, { Component } from 'react';
import { Segment, Icon, Header } from 'semantic-ui-react';
import ProfileForm from './ProfileForm';
import ShippingForm from './ShippingForm';

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
        <ProfileForm />
        <ShippingForm />
      </div>
    );
  }
}

export default AccountPage;
