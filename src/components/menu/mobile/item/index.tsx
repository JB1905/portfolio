import React from 'react';
import { Link } from 'gatsby';

interface Props {
  link: string;
  toggle: () => void;
  title: string;
}

const Mobile: React.FC<Props> = ({ link, toggle, title }) => (
  <li>
    <Link to={`${link}/`} activeClassName="active" onClick={toggle}>
      {title}
    </Link>
  </li>
);

export default Mobile;
