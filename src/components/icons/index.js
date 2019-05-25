import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { LanguageSwitch } from 'components/switch';
import Item from './Item';

import './icons.scss';

const Icons = () => (
  <StaticQuery
    query={graphql`
      query {
        data: graphCmsData {
          icons {
            id
            url
            image {
              url
            }
          }
        }
      }
    `}
    render={({ data }) => (
      <div className="icons">
        <LanguageSwitch />

        {data.icons.map((icon, index) => (
          <Item key={index} item={icon} index={index} />
        ))}
      </div>
    )}
  />
);

export default Icons;
