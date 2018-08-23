import React, { Component } from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICONS } from '../../content/icons';
import { Icon } from '../Icon';

import DesktopMenu from './Desktop';
import MobileMenu from './Mobile';

import './Menu.css';

export default class Menu extends Component {
  state = { isOpen: false, isMobile: null };

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', () => this.onResize());
  }

  onResize() {
    if (this.refs.nav.offsetHeight > 74) {
      this.setState({ isMobile: true });
      if (this.state.isOpen) this.isOffset(true);
    } else {
      this.setState({ isMobile: false });
      this.isOffset(false);
    }
  }

  isOffset = value => this.props.offset(value);

  toggleMenu = () => {
    let isOpen;

    if (!this.state.isOpen) isOpen = true;
    else if (this.state.isOpen) isOpen = false;

    if (this.state.isMobile) {
      this.setState({ isOpen: isOpen });
      this.isOffset(isOpen);
    }
  };

  render() {
    return (
      <nav>
        <div>
          <div className="icons">
            {ICONS.map((icon, index) => (
              <Icon key={index} src={icon} index={index} />
            ))}
          </div>

          <div className="nav" ref="nav">
            <DesktopMenu
              className={`desktop ${this.state.isMobile ? 'hidden' : ''}`}
            />

            {this.state.isMobile ? (
              <div className="mobile">
                <Delay wait={200}>
                  <button className="menu" onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon="bars" />
                  </button>
                </Delay>

                {this.state.isOpen ? (
                  <MobileMenu toggleMenu={this.toggleMenu} />
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }
}
