import React from 'react';

import Title from '../components/Title';
import TechnologyItem from '../components/TechnologyItem';

import { content } from '../content';

const Technologies = () => (
  <>
    <Title value={content.technologies.title} />

    <div className="technologies">
      {content.technologies.items.map((item, index) => (
        <TechnologyItem key={index} index={index} item={item} />
      ))}
    </div>
  </>
);

export default Technologies;
