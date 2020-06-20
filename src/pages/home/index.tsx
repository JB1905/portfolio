import React, { useRef, useEffect } from 'react';

import falconLanding from '../../animations/falconLanding';
import { fadeIn } from '../../animations/fadeIn';

import './home.scss';

const Home: React.FC = () => {
  const title = useRef(null);
  const subTitle = useRef(null);

  useEffect(() => {
    falconLanding(title.current);

    fadeIn(subTitle.current, 800);
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__title" ref={title}>
          Jakub Biesiada
        </h1>

        <h2 className="home__sub-title" ref={subTitle}>
          JavaScript Developer
        </h2>
      </div>
    </div>
  );
};

export default Home;
