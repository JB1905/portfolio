import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import SEO from '../components/seo';
import Title from '../components/title';
import Content from '../components/content';
import { Project } from '../components/cards';

import { Language } from '../enums/Language';

import { ProjectsQuery } from '../../graphql-types';

interface Props {
  readonly data: ProjectsQuery;
}

const Projects: React.FC<Props> = ({ data }) => {
  const { t, i18n } = useTranslation();

  return (
    <article>
      <SEO title={t('projects.title')} />

      <Title>{t('projects.title')}</Title>

      <Content className="projects">
        {data.graphCmsData.projects.map((item, index) => (
          <Project
            key={item!.id}
            index={index}
            item={item}
            language={i18n.language as Language}
          />
        ))}
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
