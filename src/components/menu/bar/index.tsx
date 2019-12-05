import React from "react";
import PropTypes from "prop-types";

import "./navbar.scss";

const Bar = ({ children }) => (
  <nav className="navbar">
    <div>{children}</div>
  </nav>
);

Bar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Bar;
