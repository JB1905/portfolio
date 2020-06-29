import gsap, { Back } from 'gsap';

export const bounceIn = (el: any, delay = 0) => {
  gsap.set(el, {
    display: 'none',
    scale: 0,
  });

  const tl = gsap.timeline({
    defaults: {
      ease: Back.easeOut,
      delay: delay / 1000 + 0.3,
      duration: 0.3,
    },
  });

  tl.to(el, {
    display: 'flex',
    scale: 1,
  });
};
