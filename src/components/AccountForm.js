import React, { Component } from 'react';
import { Segment, Icon, Header, Table, Button, Card } from 'semantic-ui-react';

class AccountForm extends Component {
  render() {
    return (
      <div className="accountForm">
        <Segment>
          <Icon name="user" size="huge" />
          <div style={styles.headerStyle}>
            <Header size="large">Account</Header>
          </div>
          <div style={styles.editButtonStyle}>
            <Button>Edit</Button>
          </div>
          <Card>
            <Card.Header>Profile</Card.Header>
            <div style={styles.tableStyle}>
              <Table basic="very" celled>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Header.Content>Customer Code</Header.Content>
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header.Content>First Name</Header.Content>
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header.Content>Last Name</Header.Content>
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header.Content>Email</Header.Content>
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header.Content>Address</Header.Content>
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header.Content>Phone</Header.Content>
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </Card>
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
    display: 'inline-block',
    float: 'right',
    verticalAlign: 'middle'
  },
  tableStyle: {
    marginLeft: '30px'
  }
};

export default AccountForm;
