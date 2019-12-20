import React from "react";
import PropTypes from "prop-types";

import Mobile from "./item";

import "./mobile.scss";

interface Props {
  className: string;
  content: any;
  toggleMenu: () => void;
}

const MobileMenu = ({ className, content, toggleMenu }: Props) => (
  <ul className={`mobile ${className}`}>
    {content.map((item, index: number) => (
      <Mobile
        key={index}
        // index={index}
        link={item.link}
        title={item.title}
        toggle={toggleMenu}
      />
    ))}
  </ul>
);

MobileMenu.defaultProps = {
  className: ``
};

MobileMenu.propTypes = {
  className: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default MobileMenu;
