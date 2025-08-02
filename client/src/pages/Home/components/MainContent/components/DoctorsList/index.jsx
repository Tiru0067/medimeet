import DoctorCard from "../DoctorCard";
import "./styles.css";

const DoctorsList = ({ doctors }) => {
  return (
    <ul className="doctors-list">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </ul>
  );
};

export default DoctorsList;
