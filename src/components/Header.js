import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Button, Image, Modal } from 'semantic-ui-react';
import LoginPage from './LoginPage';
import { logoutUser } from '../actions';

class Header extends Component {
  render() {
    console.log(this.props.registration);
    return (
      <div className="headerContainer" style={styles.headerSytle}>
        <Segment>
          <Image
            as={Link}
            to="/"
            style={styles.imageStyle}
            src={require('../img/hiossenLogo.jpg')}
          />

          <Button style={{ float: 'right' }}> 쇼핑카트 </Button>
          {this.props.authenticated ? (
            <Button
              primary
              style={styles.buttonStyle}
              onClick={this.props.logoutUser}
            >
              Sign out
            </Button>
          ) : (
            <Modal
              trigger={
                <Button primary style={styles.buttonStyle}>
                  Log In
                </Button>
              }
            >
              <Modal.Content>
                <LoginPage />
              </Modal.Content>
            </Modal>
          )}
        </Segment>
      </div>
    );
  }
}

const styles = {
  headerSytle: {
    background: 'red',
    height: '67px'
  },
  imageStyle: {
    display: 'inline-block',
    paddingLeft: '30px',
    width: '150px',
    margin: '0'
  },
  buttonStyle: {
    float: 'right',
    marginRight: '50px'
  }
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    message: state.auth.message,
    registration: state.auth.registration
  };
};

export default connect(mapStateToProps, { logoutUser })(Header);
