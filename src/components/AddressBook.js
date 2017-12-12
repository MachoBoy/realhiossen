import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Card } from 'semantic-ui-react';
import AddressCard from './common/addressCard';
import { fetchUserAddressbook } from '../actions';

class AddressBook extends Component {
  constructor(props) {
    super(props);
    //this.renderAddressCard = this.renderAddressCard.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserAddressbook();
  }

  componentDidUpdate(nextProps) {
    //console.log('nextProps', nextProps);
    //this.renderAddressCard(nextProps);
  }

  // renderAddressCard({ shippingAddressBook }) {
  //   return _.map(shippingAddressBook).map(function(value) {
  //     console.log(value.companyName);
  //     return (
  //       <div>
  //         <AddressCard {...value} />
  //       </div>
  //     );
  //   });
  // }

  // renderAddressCard({ shippingAddressBook }) {
  //   const renderAddress = shippingAddressBook.map(value => {
  //     return (
  //       <div>
  //         <AddressCard {...value} />
  //       </div>
  //     );
  //   });
  //   return renderAddress;
  // }

  render() {
    //console.log('props', this.props);
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

const mapStateToProps = state => {
  return {
    shippingAddressBook: state.user.shippingAddressBook
  };
};

export default connect(mapStateToProps, { fetchUserAddressbook })(AddressBook);
