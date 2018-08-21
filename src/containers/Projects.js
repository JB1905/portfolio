import React, { Component } from 'react';

import { Title } from '../components/Title';
import { PROJECTS } from '../content/projects';
import { ProjectItem } from '../components/Item';

export default class Projects extends Component {
  state = { projects: null };

  componentDidMount() {
    const projects = PROJECTS.map((image, index) => (
      <ProjectItem key={index} index={index} image={image} />
    ));

    this.setState({ projects: projects });
  }

  render() {
    return (
      <React.Fragment>
        <Title value="Projekty" />

        <div className="projects">{this.state.projects}</div>
      </React.Fragment>
    );
  }
}
