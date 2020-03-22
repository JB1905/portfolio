import { useState, useEffect } from 'react';

export const useBackgroundPosition = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPos({
        x: -(e.clientX - window.innerWidth / 2) / 30,
        y: -(e.clientY - window.innerHeight / 2) / 30,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return { pos };
};
