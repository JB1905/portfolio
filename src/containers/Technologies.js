import React from 'react';

import Title from '../components/Title';
import View from '../components/View';
import { TechnologyItem } from '../components/Items';

import { content } from '../content';

const Technologies = () => (
  <>
    <Title value={content.technologies.title} />

    <View className="technologies">
      {content.technologies.items.map((item, index) => (
        <TechnologyItem key={index} index={index} item={item} />
      ))}
    </View>
  </>
);

export default Technologies;
