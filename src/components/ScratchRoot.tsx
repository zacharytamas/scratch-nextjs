import Head from 'next/head';
import Script from 'next/script';

export const ScratchRoot = ({ children }) => {
  return (
    <>
      <Head>
        <title>Scratch Next.js</title>
        <Script src="//cdn.polyfill.io/v2/polyfill.min.js" />
      </Head>
      {children}
    </>
  );
};
