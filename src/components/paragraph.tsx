import React, { useRef, useEffect } from 'react';

import { fadeIn } from '../animations/fadeIn';

interface Props {
  readonly content: string;
  readonly index: number;
}

const Paragraph: React.FC<Props> = ({ content, index }) => {
  const paragraph = useRef(null);

  useEffect(() => {
    fadeIn(paragraph.current, (index + 1) * 240 + 520);
  }, []);

  return <p ref={paragraph}>{content}</p>;
};

export default Paragraph;
