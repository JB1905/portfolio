import React, { ReactChild } from "react";

import "./content.scss";

interface Props {
  className: string;
  children: ReactChild | ReactChild[];
}

const Content = ({ className = "", children }: Props) => (
  <div className={`content ${className}`}>{children}</div>
);

export default Content;
