import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import FacetJointInjectionDetails from "../../components/Treatments/FacetJointInjectionDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Facet Joint Injection in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="facet-joint-injections"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-50 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <FacetJointInjectionDetails />
            </div>

            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <TreatmentsRightSide />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
