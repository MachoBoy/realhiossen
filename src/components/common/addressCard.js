import React from 'react';
import { Card } from 'semantic-ui-react';

const addressCard = props => {
  return (
    <Card.Group>
      <Card raised link>
        <Card.Content>
          <Card.Header>{props.companyName}</Card.Header>
          <Card.Meta>
            {props.shippingFirstName}
            {props.shippingLastName}
          </Card.Meta>
          <Card.Description>{props.shippingAddress}</Card.Description>
          <Card.Description>
            {props.city} {props.state} {props.postalCode}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>Phone: {props.shippingPhone}</Card.Content>
      </Card>
    </Card.Group>
  );
};

export default addressCard;
