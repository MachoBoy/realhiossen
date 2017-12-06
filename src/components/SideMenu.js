import _ from 'lodash';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const MENU_ITEM = [
  { title: 'Account', icon: 'user circle', to: '/account' },
  { title: 'Order', icon: 'shipping', to: '/order' },
  { title: 'Contact', icon: 'address book', to: '/contact' }
];

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.renderMenu = this.renderMenu.bind(this);
    this.handleMenuOnClick = this.handleMenuOnClick.bind(this);
  }

  handleMenuOnClick(index) {
    this.setState({ activeIndex: index });
  }

  renderMenu() {
    return _.map(MENU_ITEM, ({ title, icon, to }, index) => {
      return (
        <Menu.Item
          key={title}
          as={NavLink}
          to={to}
          active={this.state.activeIndex === index}
          onClick={() => this.handleMenuOnClick(index)}
        >
          <Icon name={icon} size="large" />
          {title}
        </Menu.Item>
      );
    });
  }

  render() {
    return (
      <div>
        <Menu vertical style={styles.menuStyle}>
          {this.renderMenu()}
        </Menu>
      </div>
    );
  }
}

const styles = {
  menuStyle: {
    float: 'left',
    postion: 'fixed',
    width: '20%'
  }
};

export default SideMenu;
