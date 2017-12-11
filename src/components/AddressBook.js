import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

class AddressBook extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Header as="h2" icon>
            Shipping Address
            <Header.Subheader />
          </Header>
        </Segment>
      </div>
    );
  }
}

export default AddressBook;
