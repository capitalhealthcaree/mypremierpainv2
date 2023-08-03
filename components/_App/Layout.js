import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="https://www.mypremierpain.com/favicon.ico" />
        <title>Pain Management Specialists - Treating All Types of Pain</title>
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
        {/* For Google Search Console */}
        <meta
          name="google-site-verification"
          content="4KXE6z1IMn1YlLvnFo__ua0TXs3xPbwTkDIQcIHwr54"
        />
        {/* Add Script of Chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var continuallySettings = { appID: "ne9y6m742rzk" };`,
          }}
        ></script>
        <script src="https://cdn-app.continual.ly/js/embed/continually-embed.latest.min.js"></script>
      </Head>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
