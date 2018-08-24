import React, { Component } from 'react';

import { Title } from '../components/Title';
import { PROJECTS } from '../content/projects';
import { ProjectItem } from '../components/ProjectItem';

export default class Projects extends Component {
  state = { projects: null };

  componentDidMount() {
    const projects = PROJECTS.map((item, index) => (
      <ProjectItem key={index} index={index} item={item} />
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
