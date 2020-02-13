export const useRouterTransition = () => {
  const timeout = 250;

  const getTransitionStyles: any = {
    entering: {
      position: `absolute`,
      opacity: 0
    },
    entered: {
      transition: `opacity ${timeout}ms ease`,
      opacity: 1
    },
    exiting: {
      transition: `all ${timeout}ms ease`,
      opacity: 0
    }
  };

  return { timeout, getTransitionStyles };
};
