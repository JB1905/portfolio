import React, { HTMLAttributes } from 'react';
// import checkIsPwa from 'check-is-pwa';
import sTrimmer from 's-trimmer';

interface Props {
  readonly htmlAttributes: HTMLAttributes<HTMLHtmlElement>;
  readonly headComponents: HTMLHeadElement;
  readonly bodyAttributes: HTMLAttributes<HTMLBodyElement>;
  readonly preBodyComponents: HTMLElement;
  readonly body: string;
  readonly postBodyComponents: HTMLElement;
}

const HTML: React.FC<Props> = (props) => (
  <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      {/* <meta
        name="viewport"
        content={sTrimmer(
          'viewport-fit=cover',
          checkIsPwa() &&
            'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'
        )}
      /> */}

      {props.headComponents}
    </head>

    <body {...props.bodyAttributes}>
      {props.preBodyComponents}

      <noscript key="noscript" id="gatsby-noscript">
        This app works best with JavaScript enabled.
      </noscript>

      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />

      {props.postBodyComponents}
    </body>
  </html>
);

export default HTML;
