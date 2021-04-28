import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Page from '../components/page';
import { Project } from '../components/cards';

import { Language } from '../enums/Language';

import { ProjectsQuery } from '../../graphql-types';

interface Props {
  readonly data: ProjectsQuery;
}

const Projects = ({ data }: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <Page title={t('projects.title')} className="projects">
      {data.graphCmsData.projects.map((item, index) => (
        <Project
          key={item.id}
          index={index}
          item={item}
          language={i18n.language as Language}
        />
      ))}
    </Page>
  );
};

export const query = graphql`
  query Projects {
    graphCmsData {
      projects(where: { listed: true }, locales: [pl, en]) {
        id
        title
        liveLink
        srcLink
        year
        localizations(includeCurrent: true) {
          locale
          description
        }
        image {
          handle
          width
          height
        }
        technologies(first: 3) {
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
