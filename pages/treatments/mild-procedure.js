import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import MildProcedureDetails from "../../components/Treatments/MildProcedureDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Mild Procedure for Lumbar Spinal Stenosis"
        homePageUrl="/"
        homePageText="Home"
        activePageText="mild-procedure"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-50 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <MildProcedureDetails />
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
