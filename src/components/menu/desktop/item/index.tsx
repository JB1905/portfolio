import React from 'react';
import { Link } from 'gatsby';

interface Props {
  readonly link: string;
  readonly title: string;
}

const Desktop: React.FC<Props> = ({ link, title }) => (
  <li>
    <Link to={link} activeClassName="active">
      {title}
    </Link>
  </li>
);

export default Desktop;
