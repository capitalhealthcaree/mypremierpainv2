import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/icofont.min.css";
import "../styles/meanmenu.css";
import "react-tabs/style/react-tabs.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
// import Script from "next/script";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";
// Global RTL Style
import "../styles/rtl.css";

import Layout from "../components/_App/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <Script
        id="messenger-widget-b"
        src="https://cdn.botpenguin.com/website-bot.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.BotPenguin) {
            window.BotPenguin.init(
              "67bf286b4deb655bc592f3bb",
              "67bf283eb0a5145cacb98a41"
            );
          }
        }}
      /> */}
    </Layout>
  );
};
export default MyApp;
