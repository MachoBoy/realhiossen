import React, { Component } from 'react';
import AccountForm from './AccountForm';

class AccountPage extends Component {
  render() {
    return (
      <div className="accountPage" style={styles.accountPageStyle}>
        <AccountForm />
      </div>
    );
  }
}

const styles = {
  accountPageStyle: {
    width: '79%',
    float: 'right'
  }
};

export default AccountPage;
