import { useState, useEffect } from "react";
import Link from "next/link";

const InsuranceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const insuranceLogos = [
    {
      name: "All Savers",
      logo: "/images/insurance/01.jpg",
      alt: "All Savers Insurance",
    },
    {
      name: "Wellcare",
      logo: "/images/insurance/02.jpg",
      alt: "Wellcare Insurance",
    },
    {
      name: "Bright HealthCare",
      logo: "/images/insurance/03.jpg",
      alt: "Bright HealthCare Insurance",
    },
    {
      name: "Tricare",
      logo: "/images/insurance/04.jpg",
      alt: "Tricare Insurance",
    },
    {
      name: "Humana",
      logo: "/images/insurance/05.jpg",
      alt: "Humana Insurance",
    },
    {
      name: "Humana",
      logo: "/images/insurance/06.jpg",
      alt: "Humana Insurance",
    },
    {
      name: "Humana",
      logo: "/images/insurance/07.jpg",
      alt: "Humana Insurance",
    },
    {
      name: "Humana",
      logo: "/images/insurance/08.jpg",
      alt: "Humana Insurance",
    },
    {
      name: "Humana",
      logo: "/images/insurance/09.jpg",
      alt: "Humana Insurance",
    },
  ];

  // Auto-play functionality - only for mobile
  useEffect(() => {
    if (
      isAutoPlaying &&
      typeof window !== "undefined" &&
      window.innerWidth < 1024
    ) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentSlide]);

  const getTotalSlides = () => {
    if (typeof window !== "undefined") {
      return Math.ceil(insuranceLogos.length / 2); // Mobile - 2 per slide
    }
    return 1;
  };

  const renderLogos = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      // Desktop - continuous scrolling animation
      return (
        <div
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              animation: "scroll 40s linear infinite",
              width: "fit-content",
            }}
          >
            {/* First set of logos */}
            {insuranceLogos.map((insurance, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  width: "160px",
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={insurance.logo}
                  alt={insurance.alt}
                  style={{
                    maxWidth: "120px",
                    maxHeight: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {insuranceLogos.map((insurance, index) => (
              <div
                key={`duplicate-${index}`}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  width: "160px",
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={insurance.logo}
                  alt={insurance.alt}
                  style={{
                    maxWidth: "120px",
                    maxHeight: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      // Mobile - slide-based carousel
      const logosPerSlide = 2;
      const startIndex = currentSlide * logosPerSlide;
      const currentLogos = insuranceLogos.slice(
        startIndex,
        startIndex + logosPerSlide
      );

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {currentLogos.map((insurance, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                width: "140px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px",
                margin: "10px",
                flex: "0 0 calc(50% - 30px)",
              }}
            >
              <img
                src={insurance.logo}
                alt={insurance.alt}
                style={{
                  maxWidth: "110px",
                  maxHeight: "70px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div
      style={{
        background: "#0046c0",
        minHeight: "300px",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Left side - Carousel */}
        <div
          style={{
            flex: "1 1 600px",
            minWidth: "300px",
            position: "relative",
          }}
        >
          {renderLogos()}
        </div>

        {/* Right side - Text Content */}
        <div
          style={{
            flex: "1 1 300px",
            minWidth: "250px",
            color: "white",
            paddingLeft: "20px",
          }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "20px",
              margin: "0 0 20px 0",
            }}
          >
            Accepted Insurances
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              opacity: "0.9",
              marginBottom: "30px",
              margin: "0 0 30px 0",
            }}
          >
            At Premier Pain Centers, we accept most major insurance plans. Here
            is a list of some of the plans we accept. Please contact our office
            if you do not see your insurance provider listed.
          </p>
          <button
            style={{
              backgroundColor: "white",
              color: "#2c5f7a",
              border: "none",
              borderRadius: "25px",
              padding: "12px 24px",
              fontSize: "0.95rem",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            <Link
              href="/images/insurance-plans.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              EXPLORE MORE
            </Link>
          </button>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          div[style*="flex: 1 1 600px"] {
            flex: 1 1 100%;
          }
          div[style*="flex: 1 1 300px"] {
            flex: 1 1 100%;
            padding-left: 0;
            text-align: center;
            margin-top: 20px;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.5rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default InsuranceCarousel;
