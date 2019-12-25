import React from "react";
import Delay from "react-delay";

import "./technology.scss";

interface Props {
  image: string;
  name: string;
  index: number;
}

export const Technology = ({ image, name, index }: Props) => (
  <Delay wait={(index + 1) * 110 + 400}>
    <div className="technology__item">
      <img src={image} alt={name} className="technology__image" />
    </div>
  </Delay>
);
