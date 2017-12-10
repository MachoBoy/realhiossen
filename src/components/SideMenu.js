import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      activeIndex: null
    };
    this.renderMenu = this.renderMenu.bind(this);
    this.handleMenuOnClick = this.handleMenuOnClick.bind(this);
  }

  handleMenuOnClick(e, { name }) {
    e.preventDefault();
    this.setState({ activeIndex: name });
  }

  renderMenu() {
    return _.map(MENU_ITEM, ({ title, icon, to }, index) => {
      return (
        <Menu.Item
          key={index}
          name={title}
          as={Link}
          to={to}
          active={title === this.state.activeIndex}
          onClick={() => this.handleMenuOnClick}
        >
          <Icon name={icon} size="large" />
          {title}
        </Menu.Item>
      );
    });
  }

  render() {
    return <Menu secondary>{this.renderMenu()}</Menu>;
  }
}

export default SideMenu;
