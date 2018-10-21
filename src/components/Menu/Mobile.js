import React, { Component } from 'react';

import { MobileMenuItem } from '../Items';

export default class MobileMenu extends Component {
  toggleMenu = () => this.props.toggleMenu();

  render() {
    return (
      <div style={{ height: this.props.height }}>
        <ul>
          {this.props.content.links.map((item, index) => (
            <MobileMenuItem
              key={index}
              link={item.link}
              title={item.title}
              toggle={this.toggleMenu}
            />
          ))}
        </ul>
      </div>
    );
  }
}
