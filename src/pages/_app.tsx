import App from 'next/app';
import { withRouter } from 'next/router';
import React from 'react';
import { ScratchRoot } from '../components/ScratchRoot';

export interface IRouterUrlSummary {
  asPath?: string;
  pathname: string;
  query?: Record<string, string | string[] | undefined>;
}

class ScratchApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const { asPath, pathname, query } = router;
    const url = { asPath, pathname, query };

    return (
      <ScratchRoot>
        <Component {...pageProps} url={url} />
      </ScratchRoot>
    );
  }
}

export default withRouter(ScratchApp as any);
