import React from 'react';
import { Link } from 'gatsby';

interface Props {
  link: string;
  title: string;
}

const Desktop = ({ link, title }: Props) => (
  <li>
    <Link to={`${link}/`} activeClassName="active">
      {title}
    </Link>
  </li>
);

export default Desktop;
