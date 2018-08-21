import React, { Component } from 'react';

import { TECHNOLOGIES } from '../content/technologies';
import { TechnologyItem } from '../components/Items';
import { Title } from '../components/Title';

export default class Technologies extends Component {
  state = { technologies: null };

  componentDidMount() {
    const technologies = TECHNOLOGIES.map((data, index) => (
      <TechnologyItem key={index} index={index} data={data} />
    ));

    this.setState({ technologies: technologies });
  }

  render() {
    return (
      <React.Fragment>
        <Title value="Technologie" />

        <div className="technologies">{this.state.technologies}</div>
      </React.Fragment>
    );
  }
}
