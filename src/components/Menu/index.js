import React, { Component } from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBar from '../NavBar';
import Icons from '../Icons';
import DesktopMenu from './Desktop';
import MobileMenu from './Mobile';

import './Menu.scss';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = { isOpen: false, isMobile: null };

    this.nav = React.createRef();
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', () => this.onResize());
  }

  onResize() {
    if (this.nav.current.offsetHeight > 74) {
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
      <NavBar>
        <Icons />

        <div className="nav" ref={this.nav}>
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
                <MobileMenu
                  height={this.props.height - 76}
                  toggleMenu={this.toggleMenu}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </NavBar>
    );
  }
}
