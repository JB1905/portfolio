const transitionDelay = 250;

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(
      () => document.querySelector('.layout').scrollTo(0, 0),
      transitionDelay
    );
  } else {
    const savedPosition = getSavedScrollPosition(location);

    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }

  return false;
};
