import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faBars,
  faStar
} from '@fortawesome/free-solid-svg-icons';

import Menu from './components/Menu';
import { Content } from './components/Content';
import { Background } from './components/Background';

import './App.css';

library.add(faPhone, faEnvelope, faBars, faStar);

export default class App extends Component {
  state = { x: 0, y: 0, scale: 1.09, height: null, offset: false };

  componentDidMount() {
    this.setHeight();

    window.addEventListener('touchstart', this.onTouch);
    window.addEventListener('resize', this.setHeight);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('devicemotion', this.onDeviceMove);
  }

  setOffset = offset => this.setState({ offset: offset });
  onTouch = e => e.preventDefault();
  setHeight = () => this.setState({ height: window.innerHeight });

  onDeviceMove = e =>
    this.setState({
      x: -e.accelerationIncludingGravity.x * 5,
      y: -e.accelerationIncludingGravity.y * 5,
      scale: 1.3
    });

  onMouseMove = e =>
    this.setState({
      x: -(e.clientX - window.innerWidth / 2) / 30,
      y: -(e.clientY - window.innerHeight / 2) / 30
    });

  render() {
    const { height } = this.state;

    return (
      <Router basename={'/portfolio'}>
        <React.Fragment>
          <Background {...this.state} />

          <Menu offset={this.setOffset} height={height} />
          <Content {...this.state} />
        </React.Fragment>
      </Router>
    );
  }
}
