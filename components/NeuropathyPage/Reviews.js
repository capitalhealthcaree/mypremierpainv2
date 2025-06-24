export default function PatientTestimonial() {
  return (
    <div className="container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h2 className="fw-bold">REAL PATIENTS. REAL STORIES.</h2>

              {/* Quote Icon */}
              <span
                style={{
                  fontSize: "4rem",
                  color: "#0046c0",
                  fontFamily: "Georgia, serif",
                  lineHeight: "1",
                }}
              >
                "
              </span>

              <h3
                style={{
                  color: "#0046c0",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                }}
              >
                I am amazed with results to date!
              </h3>

              <blockquote>
                <p>
                  Love this place! Felt a difference after second visit. Just
                  had treatment number 8 today and feel great. Pain has gone to
                  mild discomfort! I am amazed with results to date!
                </p>
                <cite title="Source Title" className="fw-bold">
                  JD O.
                </cite>
              </blockquote>

              <a
                href="/reviews/"
                className="btn btn-lg px-4 py-3 text-white fw-bold"
                style={{
                  backgroundColor: "#0046c0",
                  border: "none",
                  borderRadius: "0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "black")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#0046c0")}
              >
                MORE REVIEWS
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <video
              controls
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                borderRadius: "8px",
                display: "block",
              }}
            >
              <source src="/images/neuropathy/review.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
