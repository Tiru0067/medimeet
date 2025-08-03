import { useDoctors } from "../../../../hooks/useDoctors";

import "./styles.css";
import DoctorsList from "./components/DoctorsList";
import Loading from "../../../../components/ui/Loading";

const MainContent = () => {
  const { doctors, loading } = useDoctors();

  console.log({ doctors });

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

      {loading ? (
        <Loading />
      ) : (
        <div className="main-content_list-wrapper">
          <DoctorsList doctors={doctors} />
        </div>
      )}
    </section>
  );
};

export default MainContent;
