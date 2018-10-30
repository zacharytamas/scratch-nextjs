import Head from 'next/head';
import React, { Component } from 'react';

export class ScratchRoot extends Component {
  render() {
    return (
      <>
        <Head>
          <title>CSA Sim</title>
          <script src="//cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        {this.props.children}
      </>
    );
  }
}
