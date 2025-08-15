import Link from "next/link";

const DetailsContent = () => {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-12">
          <div
            className="card border-0 shadow-sm"
            style={{
              borderRadius: "16px",
              background: "black",
            }}
          >
            <div className="card-body p-5 text-white">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <h3 className="h4 mb-3 fw-bold">
                    We Accept All Major Insurance Plans
                  </h3>
                  <p className="mb-0 opacity-90">
                    We proudly accept Medicare, Medicaid, and all major
                    insurance plans to make quality dental care accessible for
                    everyone in the Dallas community. Whether you are coming in
                    for a routine checkup, cosmetic treatment, or comprehensive
                    dental care, our experienced team is here to provide your
                    comfort and satisfaction. We warmly welcome new patients and
                    are committed to delivering personalized dental solutions in
                    a friendly, family-focused environment. Your healthy smile
                    starts here!
                  </p>
                </div>
                <div className="col-lg-3 text-lg-end mt-3 mt-lg-0">
                  <Link
                    href={"/appointment"}
                    className="btn btn-light btn-lg fw-semibold"
                    style={{
                      borderRadius: "12px",
                      padding: "12px 24px",
                    }}
                  >
                    Appointment Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
