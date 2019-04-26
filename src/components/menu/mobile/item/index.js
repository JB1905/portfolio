import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './Mobile.scss';

const Mobile = ({ link, toggle, title }) => (
  <li>
    <Link to={`${link}/`} activeClassName="active" onClick={toggle}>
      {title}
    </Link>
  </li>
);

Mobile.propTypes = {
  link: PropTypes.string.isRequired,
  toggle: PropTypes.func,
  title: PropTypes.string
};

export default Mobile;
