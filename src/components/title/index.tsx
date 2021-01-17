import React, { useState, useEffect } from 'react';
import Delay from 'react-delay';

import './title.scss';

interface Props {
  readonly children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const layout = document.querySelector('.layout') as Element;

    // TODO refactor
    const fadeOut = () => {
      const scrollValue = layout.scrollTop / 100;

      if (opacity > 0) {
        setOpacity(opacity - scrollValue);

        if (layout.scrollTop >= 0) {
          setScale(scale - scrollValue / 5);
        }
      }
    };

    layout.addEventListener('scroll', fadeOut);

    return () => layout.removeEventListener('scroll', fadeOut);
  }, []);

  return (
    <Delay wait={100}>
      <h2
        className="page__title"
        style={{ opacity, transform: `scale(${scale})` }}
      >
        {children}
      </h2>
    </Delay>
  );
};

export default Title;
