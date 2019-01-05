import React from 'react';

import Title from '../components/Title';
import View from '../components/View';
import { ProjectItem } from '../components/Items';

import { content } from '../content';

const Projects = () => (
  <article>
    <Title value={content.projects.title} />

    <View className="projects">
      {content.projects.items.map((item, index) => (
        <ProjectItem key={index} index={index} item={item} />
      ))}
    </View>
  </article>
);

export default Projects;
