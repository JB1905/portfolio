import { useState, useEffect } from "react";

export const useTitleAnimation = () => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const layout = document.querySelector(".layout")!;

    const fadeOut = () => {
      const scrolled = layout.scrollTop / 100;

      if (opacity > 0) {
        setOpacity(opacity - scrolled);

        if (layout.scrollTop >= 0) {
          setScale(scale - scrolled / 5);
        }
      }
    };

    layout.addEventListener("scroll", fadeOut);

    return () => layout.removeEventListener("scroll", fadeOut);
  }, []);

  return { opacity, scale };
};
