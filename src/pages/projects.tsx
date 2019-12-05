import React, { useContext } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Title from "components/title";
import Content from "components/content";
import { Project } from "components/cards";

import { LanguageContext } from "context";

const Projects = ({ data }) => {
  const { language } = useContext(LanguageContext);

  const { title } = data[language].projects;

  return (
    <article>
      <Title>{title}</Title>

      <Content className="projects">
        {data.graphCmsData.projects.map((item, index) => (
          <Project
            key={item.id}
            index={index}
            item={item}
            language={language}
          />
        ))}
      </Content>
    </article>
  );
};

export const query = graphql`
  {
    pl: languagesJson(lang: { eq: "pl" }) {
      projects {
        title
      }
    }

    en: languagesJson(lang: { eq: "en" }) {
      projects {
        title
      }
    }

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
          url
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

Projects.propTypes = {
  data: PropTypes.object.isRequired
};

export default Projects;
