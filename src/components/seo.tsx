import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// import { useLanguages } from '../hooks/useLanguages';

import { DefaultSeoQuery } from '../../graphql-types';

interface Props {
  readonly description?: string;
  readonly meta?: HTMLMetaElement | any;
  readonly keywords?: string[] | any;
  readonly title?: string;
}

const SEO: React.FC<Props> = ({
  description,
  meta = [],
  keywords = [],
  title,
}) => {
  // const { language } = useLanguages();

  const { site } = useStaticQuery<DefaultSeoQuery>(query);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      title={site.siteMetadata.author}
      titleTemplate={`%s | ${title || site.siteMetadata.title}`}
      // htmlAttributes={{ lang: language }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export const query = graphql`
  query DefaultSEO {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
  }
`;

export default SEO;
