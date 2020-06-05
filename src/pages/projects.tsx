import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import SEO from '../components/seo';
import Title from '../components/title';
import Content from '../components/content';
import { Project } from '../components/cards';

import { ProjectsQuery } from '../../graphql-types';

interface Props {
  readonly data: ProjectsQuery;
}

const Projects: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation('Projects');

  return (
    <article>
      <SEO title={t('title')} />

      <Title>{t('title')}</Title>

      <Content className="projects">
        {/* {data.graphCmsData.projects.map((item, index) => (
          <Project
            key={item.id}
            index={index}
            item={item}
            language={language}
          />
        ))} */}
      </Content>
    </article>
  );
};

export const query = graphql`
  query Projects {
    graphCmsData {
      projects(where: { status: PUBLISHED }) {
        id
        title
        liveLink
        srcLink
        descriptionPl
        descriptionEn
        date
        image {
          handle
          width
          height
        }
        technologies {
          id
          name
          image {
            url
          }
        }
      }
    }
  }
`;

export default Projects;
