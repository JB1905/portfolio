import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Delay from 'react-delay';

import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

import './About.scss';

import me from '../../images/me.jpg';
import { content } from '../../content';

const About = () => (
  <>
    <Title value={content.about.title} />

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

      <div className="content__container">
        {content.about.items.map((item, index) => (
          <Paragraph key={index} content={item} index={index} />
        ))}
      </div>
    </div>
  </>
);

export default About;
