import React, { Component } from 'react';
import { Segment, Icon, Header } from 'semantic-ui-react';

class OrderPage extends Component {
  render() {
    return (
      <div className="orderPage">
        <Segment size="large" textAlign="center" color="blue">
          <Header as="h2" icon>
            <Icon name="shopping basket" />
            Order
            <Header.Subheader>
              Manage your account profile and shipping address
            </Header.Subheader>
          </Header>
        </Segment>
      </div>
    );
  }
}

export default OrderPage;
