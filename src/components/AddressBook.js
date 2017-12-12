import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Card } from 'semantic-ui-react';
import { fetchUserAddressbook } from '../actions';
import shortid from 'shortid';

class AddressBook extends Component {
  componentDidMount() {
    this.props.fetchUserAddressbook();
  }

  renderAddressCard() {
    const shippingAddresses = _.map(
      this.props.shippingAddressBook,
      (value, uid) => {
        return (
          <Card raised link key={shortid.generate()}>
            <Card.Content>
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
    console.log(this.props.shippingAddressBook);
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
    shippingAddressBook: state.user.shippingAddressBook
  };
  // const shippingAddressBook = _.map(
  //   state.user.shippingAddressBook,
  //   ({ val, uid }) => {
  //     return { ...val, uid };
  //   }
  // );
  // return { shippingAddressBook };
};

export default connect(mapStateToProps, { fetchUserAddressbook })(AddressBook);
