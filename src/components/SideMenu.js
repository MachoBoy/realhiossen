import _ from 'lodash';
import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const MENU_ITEM = [
  { title: 'Account', icon: 'user circle' },
  { title: 'Order', icon: 'shipping' },
  { title: 'Contact', icon: 'address book' }
];

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.renderMenu = this.renderMenu.bind(this);
  }

  renderMenu() {
    return _.map(MENU_ITEM, ({ title, icon }) => {
      return (
        <Menu.Item>
          <Icon name={icon} size="large" />
          {title}
        </Menu.Item>
      );
    });
  }

  render() {
    return (
      <div>
        <Menu vertical>{this.renderMenu()}</Menu>
      </div>
    );
  }
}

export default SideMenu;
