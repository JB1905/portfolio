import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Delay from 'react-delay';

import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

import './About.scss';

import me from '../../images/me.jpg';
import { ABOUT } from '../../content/about';

export default class About extends Component {
  state = { paragraph: null };

  componentDidMount() {
    const paragraph = ABOUT.map((data, index) => (
      <Paragraph key={index} content={data.content} index={index} />
    ));

    this.setState({ paragraph });
  }

  render() {
    return (
      <>
        <Title value="O mnie" />

        <div className="about">
          <div className="image__container">
            <Delay wait={520}>
              <CSSTransitionGroup
                transitionName="image"
                transitionAppearTimeout={0}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}
              >
                <img src={me} alt="me" className="about__image" />
              </CSSTransitionGroup>
            </Delay>
          </div>

          <div className="content__container">{this.state.paragraph}</div>
        </div>
      </>
    );
  }
}
