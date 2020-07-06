import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import SEO from '../components/seo';
import Title from '../components/title';
import Content from '../components/content';
import { Technology } from '../components/cards';

import { TechnologiesQuery } from '../../graphql-types';

interface Props {
  readonly data: TechnologiesQuery;
}

const Technologies: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <article>
      <SEO title={t('technologies.title')} />

      <Title>{t('technologies.title')}</Title>

      <Content className="technologies">
        {data.graphCmsData.technologies.map((item, index) => (
          <Technology
            key={item!.id}
            index={index}
            name={item!.name}
            image={item!.image!.url}
          />
        ))}
      </Content>
    </article>
  );
};

export const query = graphql`
  query Technologies {
    graphCmsData {
      technologies(where: { status: PUBLISHED }) {
        id
        name
        image {
          url
        }
      }
    }
  }
`;

export default Technologies;
