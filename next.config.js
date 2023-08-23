/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "www.mypremierpain.com"],
  },
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },

  async redirects() {
    return [
      {
        source: "/blog/list-some-of-the-best-exercises-for-fractured-patella/",
        destination:
          "/blog/leg-pain/list-some-of-the-best-exercises-for-fractured-patella/",
        permanent: true,
      },
      {
        source: "/blog/9-causes-you-feel-pain-in-the-front-of-the-neck/",
        destination:
          "/blog/neck-pain/9-causes-you-feel-pain-in-the-front-of-the-neck/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/educational-videos/",
        destination: "/educational-videos/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/sports-injury/",
        destination: "/conditions-we-treat/sports-injury/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/headaches/",
        destination: "/conditions-we-treat/headaches/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/neck-pain/",
        destination: "/conditions-we-treat/neck-pain/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/joint-pain/",
        destination: "/conditions-we-treat/joint-pain/",
        permanent: true,
      },
      {
        source: "/meet-our-team/educational-videos/",
        destination: "/educational-videos/",
        permanent: true,
      },
      {
        source: "/treatments/meet-our-team/",
        destination: "/meet-our-team/",
        permanent: true,
      },
      {
        source: "/meet-our-team/reviews/",
        destination: "/reviews/",
        permanent: true,
      },
      {
        source: "/treatments/conditions-we-treat/car-accident-injury/",
        destination: "/conditions-we-treat/car-accident-injury/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/waxahachie/",
        destination: "/contact-locations/waxahachie/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/corsicana/",
        destination: "/contact-locations/corsicana/",
        permanent: true,
      },
      {
        source: "/treatments/patient-info/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/reviews/",
        destination: "/reviews/",
        permanent: true,
      },
      {
        source: "/treatments/conditions-we-treat/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },
      {
        source: "/treatments/conditions-we-treat/joint-pain/",
        destination: "/conditions-we-treat/joint-pain/",
        permanent: true,
      },
      {
        source: "/treatments/educational-videos/",
        destination: "/educational-videos/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/lancaster/",
        destination: "/contact-locations/lancaster/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/hillsboro/",
        destination: "/contact-locations/hillsboro/",
        permanent: true,
      },
      {
        source: "/treatments/about/",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/fort-worth/",
        destination: "/contact-locations/fort-worth/",
        permanent: true,
      },
      {
        source: "/treatments/video-testimonials/",
        destination: "/video-testimonials/",
        permanent: true,
      },

      {
        source: "/treatments/conditions-we-treat/back-pain/",
        destination: "/conditions-we-treat/back-pain/",
        permanent: true,
      },

      {
        source: "/treatments/contact-locations/richardson/",
        destination: "/contact-locations/richardson/",
        permanent: true,
      },

      {
        source: "/treatments/about/careers/",
        destination: "/about/",
        permanent: true,
      },

      {
        source: "/treatments/conditions-we-treat/sports-injury/",
        destination: "/conditions-we-treat/sports-injury/",
        permanent: true,
      },

      {
        source: "/treatments/contact-locations/farmers-branch/",
        destination: "/contact-locations/farmers-branch/",
        permanent: true,
      },
      {
        source: "/treatments/conditions-we-treat/knee-pain/",
        destination: "/conditions-we-treat/knee-pain/",
        permanent: true,
      },

      {
        source: "/treatments/conditions-we-treat/headaches/",
        destination: "/conditions-we-treat/headaches/",
        permanent: true,
      },

      {
        source: "/treatments/conditions-we-treat/neck-pain/",
        destination: "/conditions-we-treat/neck-pain/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/north-richland-hills/",
        destination: "/contact-locations/north-richland-hills/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/treatments/patient-forms/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/contact-locations/about/careers/",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/north-richland-hills/",
        destination: "/contact-locations/north-richland-hills/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/richardson/",
        destination: "/contact-locations/richardson/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/farmers-branch/",
        destination: "/contact-locations/farmers-branch/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/waxahachie/",
        destination: "/contact-locations/waxahachie/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/sports-injury/",
        destination: "/conditions-we-treat/sports-injury/",
        permanent: true,
      },

      {
        source: "/contact-locations/contact-locations/hillsboro/",
        destination: "/contact-locations/hillsboro/",
        permanent: true,
      },
      {
        source: "/contact-locations/educational-videos/",
        destination: "/educational-videos/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/headaches/",
        destination: "/conditions-we-treat/headaches/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/knee-pain/",
        destination: "/conditions-we-treat/knee-pain/",
        permanent: true,
      },

      {
        source: "/contact-locations/patient-info/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/contact-locations/lancaster/",
        destination: "/contact-locations/lancaster/",
        permanent: true,
      },

      {
        source: "/contact-locations/contact-locations/fort-worth/",
        destination: "/contact-locations/fort-worth/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/neck-pain/",
        destination: "/conditions-we-treat/neck-pain/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/back-pain/",
        destination: "/conditions-we-treat/back-pain/",
        permanent: true,
      },

      {
        source: "/contact-locations/reviews/",
        destination: "/reviews/",
        permanent: true,
      },

      {
        source: "/contact-locations/contact-locations/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/corsicana/",
        destination: "/contact-locations/corsicana/",
        permanent: true,
      },
      {
        source: "/contact-locations/video-testimonials/",
        destination: "/video-testimonials/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/car-accident-injury/",
        destination: "/conditions-we-treat/car-accident-injury/",
        permanent: true,
      },

      {
        source: "/contact-locations/about/",
        destination: "/about/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/joint-pain/",
        destination: "/conditions-we-treat/joint-pain/",
        permanent: true,
      },
      {
        source: "/contact-locations/meet-our-team/",
        destination: "/meet-our-team/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/corsicana/",
        destination: "/contact-locations/corsicana/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/north-richland-hills/",
        destination: "/contact-locations/north-richland-hills/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/contact-locations/farmers-branch/",
        destination: "/contact-locations/farmers-branch/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/contact-locations/richardson/",
        destination: "/contact-locations/richardson/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/hillsboro/",
        destination: "/contact-locations/hillsboro/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/reviews/",
        destination: "/reviews/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/contact-locations/waxahachie/",
        destination: "/contact-locations/waxahachie/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/fort-worth/",
        destination: "/contact-locations/fort-worth/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/lancaster/",
        destination: "/contact-locations/lancaster/",
        permanent: true,
      },
      {
        source: "/meet-our-team/contact-locations/corsicana/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/meet-our-team/contact-locations/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/meet-our-team/contact-locations/farmers-branch/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/meet-our-team/contact-locations/lancaster/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/meet-our-team/contact-locations/hillsboro/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/meet-our-team/contact-locations/waxahachie/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/meet-our-team/contact-locations/richardson/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/meet-our-team/contact-locations/north-richland-hills/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/meet-our-team/contact-locations/fort-worth/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/news/contact-locations/hillsboro/",
        destination: "/news/",
        permanent: true,
      },

      {
        source: "/about/contact-locations/fort-worth/",
        destination: "/about/",
        permanent: true,
      },

      {
        source: "/about/contact-locations/richardson/",
        destination: "/about/",
        permanent: true,
      },

      {
        source: "/about/contact-locations/hillsboro/",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/news/contact-locations/richardson/",
        destination: "/news/",
        permanent: true,
      },

      {
        source: "/news/contact-locations/fort-worth/",
        destination: "/news/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/knee-pain/",
        destination: "/conditions-we-treat/knee-pain/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/car-accident-injury/",
        destination: "/conditions-we-treat/car-accident-injury/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/back-pain/",
        destination: "/conditions-we-treat/back-pain/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },
      {
        source: "/car-accident-injury/",
        destination: "/conditions-we-treat/car-accident-injury/",
        permanent: true,
      },
      {
        source: "/meet-our-team/meet-our-team/",
        destination: "/meet-our-team/",
        permanent: true,
      },
      {
        source: "/meet-our-team/about/",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/meet-our-team/video-testimonials/",
        destination: "/video-testimonials/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/video-testimonials/",
        destination: "/video-testimonials/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/about/",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/meet-our-team/",
        destination: "/meet-our-team/",
        permanent: true,
      },
    ];
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(nextConfig);
