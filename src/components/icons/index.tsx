import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { LanguageSwitch } from '../switch';
import Item from './item';

import { IconsQuery } from '../../../graphql-types';

import './icons.scss';

const Icons = () => {
  const data = useStaticQuery<IconsQuery>(query);

  return (
    <section className="icons">
      <LanguageSwitch />

      {data.graphCmsData.icons.map((icon, index) => (
        <Item key={icon!.id} item={icon} index={index} />
      ))}
    </section>
  );
};

export const query = graphql`
  query Icons {
    graphCmsData {
      icons {
        id
        url
        title
        image {
          url
        }
      }
    }
  }
`;

export default Icons;
