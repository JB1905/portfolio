import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

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

Desktop.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Desktop;
