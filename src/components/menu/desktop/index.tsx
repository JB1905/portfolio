import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import Desktop from "./item";

import "./desktop.scss";

interface Props {
  className: string;
  content: any;
}

const DesktopMenu = ({ className, content }: Props) => (
  <CSSTransition in appear timeout={1000} classNames="desktop-menu">
    <ul className={`desktop ${className}`}>
      {content.map((item, index: number) => (
        <Desktop key={index} link={item.link} title={item.title} />
      ))}
    </ul>
  </CSSTransition>
);

DesktopMenu.defaultProps = {
  className: ``
};

DesktopMenu.propTypes = {
  className: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DesktopMenu;
