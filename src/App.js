import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

import Menu from './components/Menu';
import { Content } from './components/Content';

import './App.css';

library.add(faPhone, faEnvelope, faBars);

export default class App extends Component {
  state = { x: 0, y: 0, scale: 1.09, height: null, offset: false };

  componentDidMount() {
    this.setHeight();

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
    const { x, y, scale, height, offset } = this.state;

    return (
      <Router basename={'/portfolio'}>
        <React.Fragment>
          <div
            className="background"
            style={{
              height: height,
              transform: `scale(${scale}) translate3d(${x}px, ${y}px, 0)`
            }}
          />

          <Menu offset={this.setOffset} height={height} />

          <div
            className={`container content ${offset ? 'zoom' : ''}`}
            style={{ height: height - 76 }}>
            <Content />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
