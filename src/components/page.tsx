import React from 'react';

import SEO from './seo';
import Title from './Title';
import Content from './Content';

interface Props {
  readonly title: string;
}

const Page: React.FC<Props> = ({ children, title, className }) => (
  <article>
    <SEO title={title} />

    <Title>{title}</Title>

    <Content className={className}>{children}</Content>
  </article>
);

export default Page;
