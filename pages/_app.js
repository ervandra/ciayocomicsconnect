import React from 'react';
import App, { Container } from 'next/app';
import Axios from 'axios';
import Head from 'next/head';
import Page from '../components/global/Page';

class MyApp extends App {
   static async getInitialProps({ Component, ctx }) {
      let pageProps = {};

      if (Component.getInitialProps) {
         pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps }
   }

   render() {
      const { Component, pageProps } = this.props;

      return (
         <Container>
            <Head>
               <title>CIAYO Comics COMICONNECT Tour 2019</title>
            </Head>
            <Page>
               <Component {...pageProps} />
            </Page>
         </Container>
      )
   }
}

export default MyApp;