import { useState, useEffect } from "react";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Fast Reports",
      description: "Delivered in 1-2 days",
      color: "#667eea",
    },
    {
      icon: "🏥",
      title: "Hospital Approved",
      description: "Follows surgeon requirements",
      color: "#667eea",
    },
    {
      icon: "🗺️",
      title: "Nationwide Access",
      description: "Available across the U.S.",
      color: "#667eea",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "100% HIPAA-compliant platform",
      color: "#667eea",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div className="section-title mb-4">
          <h2> Why Patients & Surgeons Prefer Us</h2>
        </div>
        <div
          className="row align-items-stretch"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            background: "linear-gradient(135deg, #0046c0 0%, #ed2024 100%)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            minHeight: "80vh",
          }}
        >
          {/* Left Side - Image/Visual */}
          <div className="col-lg-6 col-md-12 d-flex align-items-center">
            <div
              className="w-100 h-100 d-flex align-items-center justify-content-center"
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.8s ease-out",
                padding: "1rem",
                minHeight: "100%",
              }}
            >
              {/* Main Visual Container */}
              <div
                className="position-relative w-100"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  padding: "1rem",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <img
                  src="/images/psychologist/banner.jpg"
                  alt="Expertise"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6 col-md-12 d-flex flex-column">
            <div
              className="h-100 d-flex flex-column justify-content-center"
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.8s ease-out 0.2s",
                padding: "1rem",
              }}
            >
              {/* Features List */}
              <div className="row g-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-12">
                    <div
                      className="d-flex align-items-start p-4 rounded-3 h-100"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(30px)",
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.6s ease-out ${0.3 + index * 0.1}s`,
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 30px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="me-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: feature.color,
                          borderRadius: "0.8s ease-out 0.2s",
                          fontSize: "1.5rem",
                          boxShadow: `0 5px 15px ${feature.color}30`,
                        }}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="mb-2" style={{ color: "white" }}>
                          {feature.title}
                        </h4>
                        <p
                          className="mb-0"
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: "1.1rem",
                          }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-auto pt-4">
                <button
                  className="btn btn-lg px-5 py-3"
                  style={{
                    background: "#0046c0",
                    border: "none",
                    borderRadius: "50px",
                    color: "white",
                    fontSize: "1.2rem",
                    // fontWeight: "bold",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                    transform: isVisible ? "scale(1)" : "scale(0.8)",
                    opacity: isVisible ? 1 : 0,
                    transition: "all 0.8s ease-out 0.8s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
                  }}
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem !important;
          }
          .lead {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
