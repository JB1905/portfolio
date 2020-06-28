import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { fadeIn } from '../../animations/fadeIn';

import './title.scss';

const Title: React.FC = ({ children }) => {
  const title = useRef(null);

  useEffect(() => {
    fadeIn(title.current, 200);
  }, []);

  useEffect(() => {
    const layout = document.querySelector('.layout') as HTMLElement;

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      title.current,
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.85 }
    );

    const fadeOut = () => {
      const scrolled = layout.scrollTop / 100;

      tl.progress(scrolled);
    };

    layout.addEventListener('scroll', fadeOut);

    return () => layout.removeEventListener('scroll', fadeOut);
  }, []);

  return (
    <h2 ref={title} className="page__title">
      {children}
    </h2>
  );
};

export default Title;
