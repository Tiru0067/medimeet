import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../api/doctors";
import Loading from "../../components/ui/Loading";
import { FaStar } from "react-icons/fa";
import "./styles.css";
import AppointmentForm from "./components/AppointmentForm";
import bookingImage from "../../assets/images/undraw_booking.png";
import NotFound from "../NotFound";

// Base API URL
const baseURL = "http:localhost:3000";

const DoctorDetail = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(`/doctors/${id}`);
        setData(response.data.data);
      } catch (err) {
        console.error(`Error fetching doctor by ID: ${err}`);
        setError("Doctor not found or server error.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (error) return <NotFound />;

  return (
    <div className="doctor-detail-container">
      {loading && <Loading />}

      {data && (
        <div>
          {/* --- Doctor Details Section --- */}
          <div className="doctor-top">
            <div className="doctor-details">
              <div className="doctor-details-header">
                <img
                  src={`${baseURL}/${data.image}`}
                  alt={data.name}
                  className="doctor-details-image"
                />
                <div className="doctor-details-info">
                  <h2 className="doctor-name">{data.name}</h2>
                  <p className="doctor-specialization">{data.specialization}</p>
                  <p className="doctor-experience">
                    Experience: {data.experienceYears} years
                  </p>
                  <p className="doctor-fee">
                    Consultation Fee: ₹{data.consultationFee}
                  </p>
                  <p className="doctor-rating">
                    <FaStar className="star-icon" />
                    <span>{data.rating}</span>
                  </p>
                </div>
              </div>
              {/* Doctor description */}
              <div className="description-wrapper">
                <h3 className="section-title">About</h3>
                <p className="doctor-description">{data.description}</p>
              </div>
            </div>

            {/* Illustration */}
            <div className="doctor-illustration">
              <img src={bookingImage} alt="booking" />
            </div>
          </div>

          {/* --- Appointment Form --- */}
          <div className="appointment-section">
            <h2 className="appointment-heading">Schedule an Appointment</h2>
            {data.availableSlots.find((slot) => new Date(slot) > new Date()) ? (
              <AppointmentForm data={data} />
            ) : (
              <p className="no-slots-message">
                Currently, no slots are available. Please check back later.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDetail;
