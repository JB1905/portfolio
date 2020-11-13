import React from 'react';
import Delay from 'react-delay';

interface Props {
  readonly content: string;
  readonly index: number;
}

const Paragraph = ({ content, index }: Props) => (
  <Delay wait={(index + 1) * 240 + 520}>
    <p>{content}</p>
  </Delay>
);

export default Paragraph;
