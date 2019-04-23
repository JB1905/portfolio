import React from 'react';
import Delay from 'react-delay';
import PropTypes from 'prop-types';

const Paragraph = ({ content, index }) => (
  <Delay wait={(index + 1) * 240 + 520}>
    <p>{content}</p>
  </Delay>
);

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Paragraph;
