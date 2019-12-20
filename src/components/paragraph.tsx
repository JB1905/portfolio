import React from "react";
import PropTypes from "prop-types";
import Delay from "react-delay";

interface Props {
  content: string;
  index: number;
}

const Paragraph = ({ content, index }: Props) => (
  <Delay wait={(index + 1) * 240 + 520}>
    <p>{content}</p>
  </Delay>
);

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Paragraph;
