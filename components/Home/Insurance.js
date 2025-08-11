import { useState, useEffect } from "react";
import Link from "next/link";

const InsuranceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const insuranceLogos = [
    {
      name: "All Savers",
      logo: "/images/insurance/1.jpg", // Replace with actual logo path
      alt: "All Savers Insurance",
    },
    {
      name: "Wellcare",
      logo: "/images/insurance/2.jpg", // Replace with actual logo path
      alt: "Wellcare Insurance",
    },
    {
      name: "Bright HealthCare",
      logo: "/images/insurance/3.jpg", // Replace with actual logo path
      alt: "Bright HealthCare Insurance",
    },
    {
      name: "Tricare",
      logo: "/images/insurance/4.jpg", // Replace with actual logo path
      alt: "Tricare Insurance",
    },
    {
      name: "Humana",
      logo: "/images/insurance/5.jpg", // Replace with actual logo path
      alt: "Humana Insurance",
    },
    {
      name: "Humana",
      logo: "/images/insurance/6.jpg", // Replace with actual logo path
      alt: "Humana Insurance",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentSlide]);

  const getTotalSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 1; // Desktop - show all
      if (window.innerWidth >= 768) return Math.ceil(insuranceLogos.length / 3); // Tablet - 3 per slide
      return Math.ceil(insuranceLogos.length / 2); // Mobile - 2 per slide
    }
    return 1;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides());
  };

  const getLogosPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 5; // Desktop
      if (window.innerWidth >= 768) return 3; // Tablet
      return 2; // Mobile
    }
    return 5;
  };

  const renderLogos = () => {
    const logosPerSlide = getLogosPerSlide();

    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      // Desktop - show all logos statically
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
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
                margin: "10px",
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
      );
    }

    // Tablet and Mobile - carousel
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
              width: logosPerSlide === 2 ? "140px" : "160px",
              height: logosPerSlide === 2 ? "100px" : "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: logosPerSlide === 2 ? "10px" : "15px",
              margin: "10px",
              flex:
                logosPerSlide === 2
                  ? "0 0 calc(50% - 30px)"
                  : "0 0 calc(33.333% - 27px)",
            }}
          >
            <img
              src={insurance.logo}
              alt={insurance.alt}
              style={{
                maxWidth: "100%",
                maxHeight: logosPerSlide === 2 ? "80px" : "90px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  const showControls =
    typeof window !== "undefined" &&
    window.innerWidth < 1024 &&
    getTotalSlides() > 1;

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
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {renderLogos()}

          {/* Navigation Controls */}
          {showControls && (
            <>
              <button
                onClick={prevSlide}
                style={{
                  position: "absolute",
                  left: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: "#2c5f7a",
                  transition: "all 0.3s ease",
                  zIndex: 10,
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 1)")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)")
                }
              >
                &#8249;
              </button>

              <button
                onClick={nextSlide}
                style={{
                  position: "absolute",
                  right: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: "#2c5f7a",
                  transition: "all 0.3s ease",
                  zIndex: 10,
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 1)")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)")
                }
              >
                &#8250;
              </button>
            </>
          )}
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
            We accept all major and commercial insurance plans to make your care
            as accessible as possible.
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
