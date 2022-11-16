import App from 'next/app';
import { withRouter } from 'next/router';
import { ScratchRoot } from '../components/ScratchRoot';

// TODO(zachary) This custom app does some things that are probably no longer needed
// but were helpful in earlier versions of Next.js. I let this repository age without
// changes for several years and have just now (Nov 2022) started to catch it up to
// the latest versions of its dependencies. I suspect these things aren't needed
// anymore due changes/improvements to Next's router. Especially given the major
// router overhaul for layouts and such announced in Next 13.

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
