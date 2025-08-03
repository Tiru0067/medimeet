import DoctorCard from "../DoctorCard";
import "./styles.css";
import { useSearch } from "../../../../useSearch";

const DoctorsList = ({ doctors }) => {
  const { query } = useSearch();
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <ul className="doctors-list">
      {filteredDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </ul>
  );
};

export default DoctorsList;
