import Link from "next/link";

const NewsletterForm = () => {
  return (
    <>
      <div className="newsletter-area">
        <div className="container">
          <div className="row newsletter-wrap align-items-center">
            <div className="col-lg-9">
              <h2>We Welcome New Patients</h2>
              <p>
                Premier Pain Centers is proud to welcome new patients at all of
                our convenient Texas locations, including Dallas, Richardson,
                North Richland Hills, Fort Worth, Mesquite, Hillsboro, Desoto,
                Decatur, Gun Barrel City, Waxahachie, Corsicana, Cleburne,
                Plano, and Ennis. Our Board Certified Interventional Pain
                Management specialists are committed to providing personalized,
                compassionate care to help you find lasting relief. Call today
                to book an appointment and begin your path to better pain
                management close to home.
              </p>
            </div>

            <div className="col-lg-3">
              <div
                className="common-btn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link
                  href="tel:+14695624188"
                  style={{
                    backgroundColor: "#0046c0",
                    color: "white",
                    padding: "10px 11px",
                    marginBottom: "2vh",
                  }}
                  rel="preload"
                >
                  Lock in your spot — Call now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
