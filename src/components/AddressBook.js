import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Card, Button } from 'semantic-ui-react';
import { fetchUserAddressbook, deleteShippingAddress } from '../actions';
import shortid from 'shortid';

class AddressBook extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUserAddressbook();
  }

  handleRemove(addressKey) {
    console.log(addressKey);
    this.props.deleteShippingAddress(addressKey);
  }

  renderAddressCard() {
    const shippingAddresses = _.map(
      this.props.shippingAddressBook,
      (value, addressKey) => {
        return (
          <Card raised link key={shortid.generate()}>
            <Card.Content>
              <Button
                basic
                style={{ float: 'right' }}
                icon="cancel"
                size="mini"
                onClick={() => this.handleRemove(addressKey)}
              />
              <Card.Header>{value.companyName}</Card.Header>

              <Card.Meta>
                {value.shippingFirstName}
                {value.shippingLastName}
              </Card.Meta>
              <Card.Description>{value.shippingAddress}</Card.Description>
              <Card.Description>
                {value.city} {value.state} {value.postalCode}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>Phone: {value.shippingPhone}</Card.Content>
          </Card>
        );
      }
    );
    return shippingAddresses;
  }

  render() {
    return (
      <div>
        <Segment>
          <Header as="h2" icon>
            Shipping Address
            <Header.Subheader />
          </Header>
          <Card.Group itemsPerRow={2}>
            {this.props.shippingAddressBook ? this.renderAddressCard() : null}
          </Card.Group>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shippingAddressBook: state.user.shippingAddressBook,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, {
  fetchUserAddressbook,
  deleteShippingAddress
})(AddressBook);
