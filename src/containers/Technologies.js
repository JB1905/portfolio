import React, { Component } from 'react';

import { Title } from '../components/Title';
import { TECHNOLOGIES } from '../content/technologies';
import { TechnologyItem } from '../components/TechnologyItem';

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
