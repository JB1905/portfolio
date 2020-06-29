import gsap, { Cubic } from 'gsap';

export const fadeIn = (el: any, delay = 0) => {
  gsap.set(el, {
    autoAlpha: 0,
    y: 40,
  });

  const tl = gsap.timeline({
    defaults: {
      ease: Cubic.easeOut,
    },
  });

  tl.to(el, {
    duration: 0.3,
    delay: delay / 1000 + 0.3,
    autoAlpha: 1,
    y: 0,
  });
};
