import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faBars,
  faEye
} from '@fortawesome/free-solid-svg-icons';

import Menu from './components/Menu';
import { Content } from './components/Content';
import { Background } from './components/Background';

import './App.css';

library.add(faPhone, faEnvelope, faBars, faEye);

export default class App extends Component {
  state = { x: 0, y: 0, scale: 1.09, height: null, offset: false };

  componentDidMount() {
    this.setHeight();

    window.addEventListener('touchstart', this.onTouch);
    window.addEventListener('resize', this.setHeight);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('devicemotion', this.onDeviceMove);
  }

  setOffset = offset => this.setState({ offset });
  onTouch = e => e.preventDefault();
  setHeight = () => this.setState({ height: window.innerHeight });

  onDeviceMove = e => {
    let x = e.accelerationIncludingGravity.x * 5;
    let y = e.accelerationIncludingGravity.y * 5;

    let stateX, stateY;

    if (window.orientation === 90) {
      stateX = (1.0 + x) / 2;
      stateY = (1.0 - y) / 2;

      y = stateX;
      x = stateY;
    } else if (window.orientation === -90) {
      stateX = (1.0 - x) / 2;
      stateY = (1.0 + y) / 2;

      y = stateX;
      x = stateY;
    } else if (window.orientation === 0) {
      stateY = (1.0 + y) / 2;
      stateX = (1.0 + x) / 2;

      y = stateY;
      x = stateX;
    } else if (window.orientation === 180) {
      stateY = (1.0 - y) / 2;
      stateX = (1.0 - x) / 2;

      y = stateY;
      x = stateX;
    }

    this.setState({ x, y, scale: 1.3 });
  };

  onMouseMove = e =>
    this.setState({
      x: -(e.clientX - window.innerWidth / 2) / 30,
      y: -(e.clientY - window.innerHeight / 2) / 30
    });

  render() {
    return (
      <Router basename="/portfolio">
        <>
          <Background {...this.state} />

          <Menu offset={this.setOffset} height={this.state.height} />
          <Content {...this.state} />
        </>
      </Router>
    );
  }
}
