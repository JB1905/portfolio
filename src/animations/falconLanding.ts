import gsap, { Back } from 'gsap';

const falconLanding = (el: any, delay = 0) => {
  gsap.set(el, {
    scale: 1.6,
    autoAlpha: 0,
  });

  const tl = gsap.timeline({
    defaults: {
      ease: Back.easeInOut,
    },
  });

  tl.to(el, {
    delay: delay / 1000 + 0.3,
    autoAlpha: 1,
    duration: 0.7,
    scale: 1,
  });
};

export default falconLanding;
