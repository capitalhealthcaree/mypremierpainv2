import dynamic from "next/dynamic";

const CommonForm = dynamic(() => import("../Appointment/CommonForm"));

const AppointmentForm = () => {
  return (
    <>
      <div className="appointment-area pt-5 pb-5 plr-15">
        <div className="container-fluid p-0">
          <div className="appointment-item">
            <h2>Book Your Appointment</h2>
            <span>Appointment confirmation will be provided promptly.</span>

            <CommonForm isFromHome={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
