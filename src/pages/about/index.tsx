import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Img, { FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';

import SEO from '../../components/seo';
import Title from '../../components/title';
import Content from '../../components/content';
import Paragraph from '../../components/paragraph';

import falconLanding from '../../animations/falconLanding';

import { AboutQuery } from '../../../graphql-types';

import './about.scss';

interface Props {
  readonly data: AboutQuery;
}

const About: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  const image = useRef(null);

  useEffect(() => {
    falconLanding(image.current, 320);
  }, []);

  return (
    <article>
      <SEO title={t('about.title')} />

      <Title>{t('about.title')}</Title>

      <Content className="about">
        <div className="image__container">
          <figure ref={image}>
            {data.image && (
              <Img fluid={data.image.childImageSharp!.fluid as FluidObject} />
            )}
          </figure>
        </div>

        <div className="content__container">
          {t<string[]>('about.content', { returnObjects: true }).map(
            (item, index) => (
              <Paragraph key={index} content={item!} index={index} />
            )
          )}
        </div>
      </Content>
    </article>
  );
};

export const query = graphql`
  query About {
    image: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 360, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
