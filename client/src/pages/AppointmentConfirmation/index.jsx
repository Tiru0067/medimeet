import { Link } from "react-router-dom";
import "./styles.css";
import confirmIllustartion from "../../assets/images/undraw_confirmed.png";

const AppointmentConfirmation = () => {
  return (
    <div className="confirmation-container">
      <img
        src={confirmIllustartion}
        alt="Appointment Confirmed"
        className="confirmation-illustration"
      />

      <h1 className="confirmation-title">Appointment Confirmed!</h1>
      <p className="confirmation-message">
        Your appointment has been successfully booked. We look forward to seeing
        you!
      </p>

      <Link to="/" className="confirmation-home-link">
        Go to Home
      </Link>
    </div>
  );
};

export default AppointmentConfirmation;
