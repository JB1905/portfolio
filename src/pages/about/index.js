import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Delay from 'react-delay';
import { CSSTransition } from 'react-transition-group';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Title from 'components/title';
import Content from 'components/content';
import Paragraph from 'components/paragraph';

import { LanguageContext } from 'context';

import './about.scss';

const About = ({ data }) => {
  const { language } = useContext(LanguageContext);

  return (
    <article>
      <Title>{language === 'pl' ? 'O mnie' : 'About'}</Title>

      <Content className="about">
        <div className="image__container">
          <Delay wait={520}>
            <figure>
              <CSSTransition in appear timeout={1000} classNames="image">
                <Img fluid={data.image.childImageSharp.fluid} />
              </CSSTransition>
            </figure>
          </Delay>
        </div>

        <div className="content__container">
          {data[language].about.content.map((item, index) => (
            <Paragraph key={index} content={item} index={index} />
          ))}
        </div>
      </Content>
    </article>
  );
};

export const query = graphql`
  {
    image: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 360, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    pl: languagesJson(lang: { eq: "pl" }) {
      about {
        content
      }
    }

    en: languagesJson(lang: { eq: "en" }) {
      about {
        content
      }
    }
  }
`;

About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;
