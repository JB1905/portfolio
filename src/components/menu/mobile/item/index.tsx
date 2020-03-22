import React from 'react';
import { Link } from 'gatsby';

interface Props {
  link: string;
  toggle: () => void;
  title: string;
}

const Mobile = ({ link, toggle, title }: Props) => (
  <li>
    <Link to={`${link}/`} activeClassName="active" onClick={toggle}>
      {title}
    </Link>
  </li>
);

export default Mobile;
