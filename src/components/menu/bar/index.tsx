import React, { ReactChild } from "react";

import "./navbar.scss";

interface Props {
  children: ReactChild | ReactChild[];
}

const Bar = ({ children }: Props) => (
  <nav className="navbar">
    <div>{children}</div>
  </nav>
);

export default Bar;
