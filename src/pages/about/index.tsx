import React, { useContext } from "react";
import PropTypes from "prop-types";
import Delay from "react-delay";
import { CSSTransition } from "react-transition-group";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Title from "../../components/title";
import Content from "../../components/content";
import Paragraph from "../../components/paragraph";

import { LanguageContext } from "../../context";

import "./about.scss";

interface Props {}

const About = ({ data }: Props) => {
  const { language } = useContext(LanguageContext);

  const { title, content } = data[language].about;

  return (
    <article>
      <Title>{title}</Title>

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
          {content.map((item, index) => (
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
          ...GatsbyImageSharpFluid
        }
      }
    }

    pl: languagesJson(lang: { eq: "pl" }) {
      about {
        title
        content
      }
    }

    en: languagesJson(lang: { eq: "en" }) {
      about {
        title
        content
      }
    }
  }
`;

About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;
