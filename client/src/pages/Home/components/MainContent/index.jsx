import { useDoctors } from "../../../../hooks/useDoctors";

import "./styles.css";
import DoctorsList from "./components/DoctorsList";
import Loading from "../../../../components/ui/loading";

const MainContent = () => {
  const { doctors, loading } = useDoctors();

  return (
    <section className="main-content">
      <div className="main-content-header">
        <h2 className="main-content-title">Available Doctors</h2>
        <p className="main-content-description">
          Browse the list of doctors below to view their specialties and
          availability. You can use the search above to narrow down your options
          based on your needs.
        </p>
      </div>

      {loading ? <Loading /> : <DoctorsList doctors={doctors} />}
    </section>
  );
};

export default MainContent;
