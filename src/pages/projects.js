import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Title from 'components/title';
import Content from 'components/content';
import { Project } from 'components/cards';

import { Store } from 'layouts';

const Projects = ({ data }) => {
  const { language } = useContext(Store);

  return (
    <article>
      <Title>{language === 'pl' ? 'Projekty' : 'Projects'}</Title>

      <Content className="projects">
        {data.graphCmsData.projects.map((item, index) => (
          <Project key={index} index={index} item={item} language={language} />
        ))}
      </Content>
    </article>
  );
};

export const query = graphql`
  {
    graphCmsData {
      projects {
        title
        liveLink
        srcLink
        descriptionPl
        descriptionEn
        date
        image {
          url
        }
        technologies {
          id
          name
        }
      }
    }
  }
`;

Projects.propTypes = {
  data: PropTypes.object.isRequired
};

export default Projects;
