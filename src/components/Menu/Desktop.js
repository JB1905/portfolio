import React, { Component } from 'react';

import { MenuItem } from '../MenuItem';

export default class DesktopMenu extends Component {
  render() {
    return (
      <ul className={this.props.className}>
        <MenuItem link="/" title="Start" />
        <MenuItem link="/about" title="O mnie" />
        <MenuItem link="/technologies" title="Technologie" />
        <MenuItem link="/projects" title="Projekty" />
        <MenuItem link="/contact" title="Kontakt" />
      </ul>
    );
  }
}
