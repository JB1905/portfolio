import { useEffect } from 'react';
import { navigate } from 'gatsby';

// TODO
export default () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return null;
};
