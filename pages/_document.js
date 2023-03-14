/* eslint-disable react/no-danger */
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const page = ctx.renderPage(App => props =>
         sheet.collectStyles(<App {...props} />)
      );
      const styleTags = sheet.getStyleElement();
      const initialProps = await Document.getInitialProps(ctx);
      const currentPath = ctx.req.originalUrl

      return { ...page, initialProps, styleTags, currentPath }
   }

   render() {
      const { currentPath } = this.props;
      return (
         <html lang="en">
            <Head>
               {this.props.styleTags}
               <link rel="stylesheet" href="/static/css/foundation.min.css" />
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
               <link rel="stylesheet" href="/static/css/font.css" />
               {/* <link rel="stylesheet" href="/static/dist/fullpage.css" /> */}
               <link rel="stylesheet" href="/static/css/app.css"/>
               <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWFXSMB')`}} />
            </Head>
            <body>
               <Main />
               <script src="/static/js/vendor/jquery.js"></script>
               <script src="/static/js/vendor/foundation.min.js"></script>
               <script src="/static/js/vendor/what-input.js"></script>
               <script src="/static/vendors/easings.min.js"></script>
               <script src="/static/vendors/scrolloverflow.min.js"></script>

               <NextScript />
               <noscript>
                  CIAYO COMICS CONNECT Official Website
               </noscript>
            </body>
         </html>
      )
   }
}