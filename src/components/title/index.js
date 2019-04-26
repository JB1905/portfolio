import React, { useState, useEffect } from 'react';
import Delay from 'react-delay';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({ children }) => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  const fadeOut = el => {
    const scrolled = el.scrollTop / 100;

    if (opacity > 0) {
      setOpacity(opacity - scrolled);
      setScale(scale - scrolled / 5);
    }
  };

  useEffect(() => {
    const observable = document.querySelector('.layout');

    observable.addEventListener('scroll', () => fadeOut(observable));
    observable.removeEventListener('scroll', () => fadeOut(observable));
  }, []);

  return (
    <Delay wait={100}>
      <h2
        style={{
          opacity: opacity,
          transform: `scale(${scale})`,
        }}
        className="page__title"
      >
        {children}
      </h2>
    </Delay>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
