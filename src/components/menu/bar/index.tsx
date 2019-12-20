import React from "react";
import PropTypes from "prop-types";

import "./navbar.scss";

interface Props {}

const Bar = ({ children }: Props) => (
  <nav className="navbar">
    <div>{children}</div>
  </nav>
);

Bar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Bar;
