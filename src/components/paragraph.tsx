import React from 'react';
import Delay from 'react-delay';

interface Props {
  content: string;
  index: number;
}

const Paragraph: React.FC<Props> = ({ content, index }) => (
  <Delay wait={(index + 1) * 240 + 520}>
    <p>{content}</p>
  </Delay>
);

export default Paragraph;
