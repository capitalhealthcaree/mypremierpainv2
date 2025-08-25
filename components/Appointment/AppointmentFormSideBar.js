import AppointmentForm from "./CommonForm";

const AppointmentFormSideBar = () => {
  return (
    <>
      <div className="appointment-area-three">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-12">
              <div
                className="appointment-item appointment-item-two"
                style={{ marginRight: "0px", marginTop: "0px" }}
              >
                <h2>Book your appointment</h2>
                <span>Appointment confirmation will be provided promptly.</span>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentFormSideBar;
