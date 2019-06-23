import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './mobile.scss';

const Mobile = ({ link, toggle, title }) => (
  <li>
    <Link to={`${link}/`} activeClassName="active" onClick={toggle}>
      {title}
    </Link>
  </li>
);

Mobile.propTypes = {
  link: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Mobile;
