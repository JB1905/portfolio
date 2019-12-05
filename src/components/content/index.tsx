import React from "react";
import PropTypes from "prop-types";

import "./content.scss";

const Content = ({ className, children }) => (
  <div className={`content ${className}`}>{children}</div>
);

Content.defaultProps = {
  className: ``
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Content;
