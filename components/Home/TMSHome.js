export default function TMSPsychiatrySection() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 10,
        marginTop: "-80px",
        paddingTop: "0",
      }}
    >
      <div className="container px-4">
        <div className="row g-4">
          <div className="col-md-1"></div>
          {/* Box 1 - TMS Therapy */}
          <div className="col-md-5">
            <div
              className="card h-100 shadow-lg"
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                border: "none",
              }}
            >
              <div className="card-body p-4">
                <div className="d-flex align-items-start mb-4">
                  <div
                    className="me-3"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "#0046c0",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.25)",
                    }}
                  >
                    <svg
                      style={{ width: "32px", height: "32px", color: "white" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow-1">
                    <h3
                      className="h4 fw-bold mb-2"
                      style={{ color: "#232323" }}
                    >
                      Pain Psychiatry
                    </h3>
                    <p
                      className="small fw-semibold mb-0"
                      style={{
                        color: "#0046c0",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Stronger Mind, Better Life
                    </p>
                  </div>
                </div>
                <p className="mb-4">
                  Pain affects body and mind; our specialized psychiatry
                  services treat depression, anxiety, trauma, restoring lasting
                  emotional wellness.
                </p>
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="me-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#0046c0",
                        borderRadius: "50%",
                      }}
                    >
                      <svg
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "white",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Depression, Anxiety & PTSD</span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="me-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#0046c0",
                        borderRadius: "50%",
                      }}
                    >
                      <svg
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "white",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Bipolar Disorder & OCD</span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="me-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#0046c0",
                        borderRadius: "50%",
                      }}
                    >
                      <svg
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "white",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Medication Management</span>
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-2">
                  <a
                    href="tel:+14695624188"
                    className="btn flex-grow-1 fw-semibold"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "#0046c0",
                      color: "#0046c0",
                      borderWidth: "2px",
                      borderRadius: "8px",
                      padding: "12px 16px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0046c0";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#0046c0";
                    }}
                  >
                    Call US
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Box 2 - Psychiatry Services */}
          <div className="col-md-5">
            <div
              className="card h-100 shadow-lg"
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                border: "none",
                transition: "all 0.3s ease",
              }}
            >
              <div className="card-body p-4">
                <div className="d-flex align-items-start mb-4">
                  <div
                    className="me-3"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "#0046c0",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 25px rgba(139, 92, 246, 0.25)",
                    }}
                  >
                    <svg
                      style={{ width: "32px", height: "32px", color: "white" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow-1">
                    <h3
                      className="h4 fw-bold mb-2"
                      style={{ color: "#232323" }}
                    >
                      Pain Management
                    </h3>
                    <p
                      className="small fw-semibold mb-0"
                      style={{
                        color: "#0046c0",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Beyond Pain, Towards Life{" "}
                    </p>
                  </div>
                </div>
                <p className="mb-4">
                  Our expert pain specialists provide personalized, innovative
                  pain treatments, restoring life quality with minimally
                  invasive, regenerative, medication-sparing options.
                </p>
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="me-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#0046c0",
                        borderRadius: "50%",
                      }}
                    >
                      <svg
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "white",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Neck, Shoulder & Back Pain</span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="me-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#0046c0",
                        borderRadius: "50%",
                      }}
                    >
                      <svg
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "white",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Hip, Knee, Joint & Leg Pain</span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="me-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#0046c0",
                        borderRadius: "50%",
                      }}
                    >
                      <svg
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "white",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Headaches & Sports Injuries</span>
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-2">
                  <a
                    href="/appointment/"
                    className="btn flex-grow-1 fw-semibold"
                    style={{
                      backgroundColor: "#0046c0",
                      borderColor: "#0046c0",
                      color: "white",
                      borderRadius: "8px",
                      padding: "12px 16px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.color = "black";
                      e.currentTarget.style.borderColor = "#0046c0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#0046c0";
                      e.currentTarget.style.borderColor = "#0046c0";
                      e.currentTarget.style.color = "white";
                    }}
                  >
                    Schedule Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}
