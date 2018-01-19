import React, { Component } from 'react';

class MenuLink extends Component {

  handleLinkClick = (event) => {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    const linkClass = this.props.active ? 'list-active' : '';
    return (
      <li>
        <a onClick={this.handleLinkClick}
           href="#"
           className={linkClass}
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default MenuLink;