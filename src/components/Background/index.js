import React, { Component } from 'react';

import './Background.scss';

import trianglify from '../../images/trianglify.svg';

export default class Background extends Component {
  state = { x: 0, y: 0, scale: 1.09 };

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('devicemotion', this.onDeviceMove);
  }

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

  onMouseMove = e => {
    this.setState({
      x: -(e.clientX - window.innerWidth / 2) / 30,
      y: -(e.clientY - window.innerHeight / 2) / 30
    });
  };

  render() {
    const { scale, x, y } = this.state;
    const { height } = this.props;

    return (
      <div
        className="background"
        style={{
          background: `url(${trianglify})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height,
          transform: `scale(${scale}) translate3d(${x}px, ${y}px, 0)`
        }}
      />
    );
  }
}
