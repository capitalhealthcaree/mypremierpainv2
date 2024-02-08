import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="https://www.mypremierpain.com/favicon.ico" />
        <title>Pain Management Specialists - Treating All Types of Pain</title>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="At Premier Pain Centers, we offer a variety of pain management services in Richardson, Fort Worth, and the surrounding areas. Call to book an appointment."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Add Script of Chat */}
        <script
          async
          defer
          dangerouslySetInnerHTML={{
            __html: `
                var continuallySettings = { appID: "43krzgv6vyj6" };
                var script = document.createElement('script');
                script.src = "https://cdn-app.continual.ly/js/embed/continually-embed.latest.min.js";
                script.async = true;
                script.defer = true;
                document.body.appendChild(script);
              `,
          }}
        ></script>
      </Head>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
