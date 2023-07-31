/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  swcMinify: true,
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
        source: "/treatments/meet-our-team/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/conditions-we-treat/car-accident-injury/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/waxahachie/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/corsicana/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/patient-info/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/reviews/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/conditions-we-treat/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/conditions-we-treat/joint-pain/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/lancaster/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/educational-videos/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/hillsboro/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/conditions-we-treat/joint-pain/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/lancaster/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/educational-videos/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/hillsboro/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/about/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/fort-worth/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/video-testimonials/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/conditions-we-treat/back-pain/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/contact-locations/richardson/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/about/careers/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/conditions-we-treat/sports-injury/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/contact-locations/farmers-branch/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/conditions-we-treat/knee-pain/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/conditions-we-treat/headaches/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/conditions-we-treat/neck-pain/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/north-richland-hills/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/contact-locations/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/patient-forms/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/treatments/patient-forms/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/patient-forms/",
        destination: "/treatments/",
        permanent: true,
      },
      {
        source: "/treatments/patient-forms/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/treatments/patient-forms/",
        destination: "/treatments/",
        permanent: true,
      },

      {
        source: "/contact-locations/about/careers/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/north-richland-hills/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/richardson/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/farmers-branch/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/waxahachie/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/sports-injury/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/contact-locations/hillsboro/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/contact-locations/educational-videos/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/headaches/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/knee-pain/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/patient-info/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/contact-locations/lancaster/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/contact-locations/fort-worth/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/neck-pain/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/back-pain/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/reviews/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/contact-locations/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/contact-locations/contact-locations/corsicana/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/contact-locations/video-testimonials/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/car-accident-injury/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/about/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/contact-locations/conditions-we-treat/joint-pain/",
        destination: "/contact-locations/",
        permanent: true,
      },
      {
        source: "/contact-locations/meet-our-team/",
        destination: "/contact-locations/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/corsicana/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/north-richland-hills/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/contact-locations/farmers-branch/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },
      {
        source: "/conditions-we-treat/contact-locations/richardson/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/hillsboro/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/waxahachie/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/fort-worth/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },

      {
        source: "/conditions-we-treat/contact-locations/lancaster/",
        destination: "/conditions-we-treat/",
        permanent: true,
      },

      {
        source: "/meet-our-team/contact-locations/corsicana/",
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
        destination: "/meet-our-team/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/car-accident-injury/",
        destination: "/meet-our-team/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/back-pain/",
        destination: "/meet-our-team/",
        permanent: true,
      },
      {
        source: "/car-accident-injury/",
        destination: "/conditions-we-treat/car-accident-injury/",
        permanent: true,
      },
      {
        source: "/meet-our-team/conditions-we-treat/knee-pain/",
        destination: "/meet-our-team/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
