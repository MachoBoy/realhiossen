import React, { Component } from 'react';
import { Segment, Icon, Header } from 'semantic-ui-react';

class ContactPage extends Component {
  render() {
    return (
      <div className="orderPage">
        <Segment size="large" textAlign="center" color="green">
          <Header as="h2" icon>
            <Icon name="address book" />
            Contact
            <Header.Subheader>ABC</Header.Subheader>
          </Header>
        </Segment>
      </div>
    );
  }
}

export default ContactPage;
