import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./styles.css";
import { Stethoscope } from "lucide-react";
import { FaStar } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  const nextSlot = doctor.availableSlots.find(
    (slot) => new Date(slot) > new Date()
  );
  const formattedSlot = nextSlot
    ? `🟢 ${format(new Date(nextSlot), "MMM d, h:mm a")}`
    : "🔴 No slots available";

  return (
    <li className="doctor-card">
      <Link to={`/doctor/${doctor.id}`} className="doctor-card__link">
        <div className="doctor-card__image-wrapper">
          <img
            src={`http://192.168.1.8:3000${doctor.image}`}
            alt={doctor.name}
            className="doctor-card__image"
          />
        </div>
        <div className="doctor-card__details">
          <p className="doctor-card__name">{doctor.name}</p>

          <div className="doctor-card__specialization">
            <Stethoscope className="stethoscope-icon" />
            <p>{doctor.specialization}</p>
          </div>

          {/* Group fee + rating */}
          <div className="doctor-card__fee-rating">
            <div className="doctor-card__rating">
              <FaStar className="star-icon" />
              <p>{doctor.rating}</p>
            </div>
            <p className="doctor-card__fee">{`| ₹${doctor.consultationFee}`}</p>
          </div>

          {/* Availability */}
          <p className="doctor-card__availability">{formattedSlot}</p>
        </div>
      </Link>
    </li>
  );
};

export default DoctorCard;
