// import Document, { Html, Head, Main, NextScript } from "next/document";

// class MyDocument extends Document {
//   render() {
//     const { locale } = this.props.__NEXT_DATA__;
//     const dir = locale === "ar" ? "rtl" : "ltr";
//     return (
//       <Html dir={dir} lang={locale}>
//         <Head>
//           <link
//             href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
//             rel="stylesheet"
//           />
//           <link rel="icon" href="/images/favicon.ico" />
//           {/* Google Tag Manager Script */}
//           <script
//             async
//             defer
//             dangerouslySetInnerHTML={{
//               __html: `
//                 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//                 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//                 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//                 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//                 })(window,document,'script','dataLayer','GTM-PJ54LHJ');
//               `,
//             }}
//           />
//           {/* For Google Search Console */}
//           <meta
//             name="google-site-verification"
//             content="4KXE6z1IMn1YlLvnFo__ua0TXs3xPbwTkDIQcIHwr54"
//           />
//           {/* Add Script of Chat */}
//           <script
//             async
//             defer
//             dangerouslySetInnerHTML={{
//               __html: `var continuallySettings = { appID: "6p9r2x98xrq7" };`,
//             }}
//           ></script>
//           <script
//             async
//             defer
//             src="https://cdn-app.continual.ly/js/embed/continually-embed.latest.min.js"
//           ></script>
//         </Head>
//         <body>
//           {/* Google Tag Manager Script */}
//           <noscript async defer>
//             <iframe
//               src="https://www.googletagmanager.com/ns.html?id=GTM-PJ54LHJ"
//               height="0"
//               width="0"
//               style={{ display: "none", visibility: "hidden" }}
//             ></iframe>
//           </noscript>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === "ar" ? "rtl" : "ltr";
    return (
      <Html dir={dir} lang={locale}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/images/favicon.ico" />
          {/* Google Tag Manager Script */}
          <script
            async
            defer
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PJ54LHJ');
              `,
            }}
          />
          {/* For Google Search Console */}
          <meta
            name="google-site-verification"
            content="4KXE6z1IMn1YlLvnFo__ua0TXs3xPbwTkDIQcIHwr54"
          />
        </Head>
        <body>
          {/* Add Script of Chat */}
          <script
            async
            defer
            dangerouslySetInnerHTML={{
              __html: `
                var continuallySettings = { appID: "6p9r2x98xrq7" };
                var script = document.createElement('script');
                script.src = "https://cdn-app.continual.ly/js/embed/continually-embed.latest.min.js";
                script.async = true;
                script.defer = true;
                document.body.appendChild(script);
              `,
            }}
          ></script>
          {/* Google Tag Manager Script to show Chat ICON*/}
          <noscript async>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PJ54LHJ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
