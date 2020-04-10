import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { useLanguages } from '../hooks/useLanguages';

interface Props {
  description: string;
  meta: HTMLMetaElement;
  keywords: string[];
  title: string;
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO: React.FC<Props> = ({
  description,
  meta = [],
  keywords = [],
  title,
}) => {
  const { language } = useLanguages();

  return (
    <StaticQuery
      query={detailsQuery}
      render={({ site }) => {
        const metaDescription = description || site.siteMetadata.description;

        return (
          <Helmet
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            htmlAttributes={{ lang: language }}
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
      }}
    />
  );
};

export default SEO;
