import "./styles.css";
import TimeSlotDropdown from "../TimeSlotDropdown.";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppointmentForm = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !selectedSlot) {
      setError("Please fill out all fields before booking.");
      return;
    }

    setError("");
    navigate("/confirm");
  };

  return (
    <div className="appointment-form">
      <form onSubmit={handleSubmit}>
        {error && <p className="form-error">{error}</p>}

        <div className="form-group">
          <label>Patient Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Date & Time</label>
          <TimeSlotDropdown
            slots={data.availableSlots}
            selectedSlot={selectedSlot}
            onSelect={setSelectedSlot}
          />
        </div>

        <button type="submit" className="submit-button">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
