import React from 'react';
import Delay from 'react-delay';
import { CSSTransition } from 'react-transition-group';

import Title from '../../components/Title';
import View from '../../components/View';
import Paragraph from '../../components/Paragraph';

import './About.scss';

import me from '../../images/me.jpg';
import { content } from '../../content';

const About = () => (
  <article>
    <Title value={content.about.title} />

    <View className="about">
      <div className="image__container">
        <Delay wait={520}>
          <CSSTransition in appear timeout={500} classNames="image">
            <figure className="about__image">
              <img src={me} alt="me" />
            </figure>
          </CSSTransition>
        </Delay>
      </div>

      <div className="content__container">
        {content.about.items.map((item, index) => (
          <Paragraph key={index} content={item} index={index} />
        ))}
      </div>
    </View>
  </article>
);

export default About;
