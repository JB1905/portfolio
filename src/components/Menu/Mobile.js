import React, { Component } from 'react';

import MobileMenuItem from '../MobileMenuItem';

export default class MobileMenu extends Component {
  toggleMenu = () => this.props.toggleMenu();

  render() {
    return (
      <div style={{ height: this.props.height }}>
        <ul>
          <MobileMenuItem link="/" title="Start" toggle={this.toggleMenu} />

          <MobileMenuItem
            link="/about"
            title="O mnie"
            toggle={this.toggleMenu}
          />

          <MobileMenuItem
            link="/technologies"
            title="Technologie"
            toggle={this.toggleMenu}
          />

          <MobileMenuItem
            link="/projects"
            title="Projekty"
            toggle={this.toggleMenu}
          />

          <MobileMenuItem
            link="/contact"
            title="Kontakt"
            toggle={this.toggleMenu}
          />
        </ul>
      </div>
    );
  }
}
