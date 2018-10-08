import React from 'react';

import Title from '../components/Title';
import ProjectItem from '../components/ProjectItem';

import { content } from '../content';

const Projects = () => (
  <>
    <Title value={content.projects.title} />

    <div className="projects">
      {content.projects.items.map((item, index) => (
        <ProjectItem key={index} index={index} item={item} />
      ))}
    </div>
  </>
);

export default Projects;
