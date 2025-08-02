import "./styles.css";

const DoctorCard = ({ doctor }) => {
  console.log(`http://localhost:3000${doctor.image}`);
  return (
    <li className="doctor-card">
      <img
        src={`http://localhost:3000${doctor.image}`}
        alt={doctor.name}
        className="doctor-card-image"
      />
    </li>
  );
};

export default DoctorCard;
