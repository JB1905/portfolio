import React, { Component } from 'react';

import Title from '../components/Title';
import TechnologyItem from '../components/TechnologyItem';

import { TECHNOLOGIES } from '../content/technologies';

export default class Technologies extends Component {
  state = { technologies: null };

  componentDidMount() {
    const technologies = TECHNOLOGIES.map((item, index) => (
      <TechnologyItem key={index} index={index} item={item} />
    ));

    this.setState({ technologies });
  }

  render() {
    return (
      <>
        <Title value="Technologie" />

        <div className="technologies">{this.state.technologies}</div>
      </>
    );
  }
}
