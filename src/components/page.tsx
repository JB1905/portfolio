import * as React from 'react';

import SEO from './seo';
import Title from './title';
import Content from './content';

interface Props {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly className: string;
}

const Page = ({ children, title, className = '' }: Props) => (
  <article>
    <SEO title={title} />

    <Title>{title}</Title>

    <Content className={className}>{children}</Content>
  </article>
);

export default Page;
