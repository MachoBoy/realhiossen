import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Button, Image, Modal } from 'semantic-ui-react';
import LoginPage from './LoginPage';
import SideMenu from './SideMenu';
import { logoutUser } from '../actions';

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <Segment>
          <div className="logo" style={styles.imageStyle}>
            <Image as={Link} to="/" src={require('../img/hiossenLogo.jpg')} />
          </div>
          {this.props.authenticated ? (
            <div className="menuContainer" style={styles.menuContainer}>
              <SideMenu />
            </div>
          ) : (
            <div className="menuContainer" style={styles.menuContainerHidden}>
              <SideMenu />
            </div>
          )}

          {this.props.authenticated ? (
            <div style={styles.buttonStyle}>
              <Button color="red" onClick={this.props.logoutUser}>
                Sign out
              </Button>
            </div>
          ) : (
            <Modal
              size="tiny"
              trigger={
                <div style={styles.buttonStyle}>
                  <Button primary>Log In</Button>
                </div>
              }
            >
              <Modal.Content style={{ padding: '0' }}>
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
  imageStyle: {
    marginLeft: '30px',
    marginBottom: '15px',
    width: '150px',
    float: 'left',
    display: 'inline-block',
    marginRight: '48%'
  },
  menuContainer: {
    display: 'inline-block',
    marginRight: '5%'
  },
  menuContainerHidden: {
    display: 'inline-block',
    visibility: 'hidden',
    marginRight: '5%'
  },

  buttonStyle: {
    display: 'inline-block'
  }
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    message: state.auth.message,
    registration: state.auth.registration,
    user: state.auth.user,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { logoutUser })(Header);
