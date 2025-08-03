import { createContext, useState, useEffect } from "react";
import api from "../api/doctors";

const DoctorsContext = createContext({});

export const DoctorsProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(false);
  const [errorDoctors, setErrorDoctors] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoadingDoctors(true);
      setErrorDoctors(null);

      try {
        const response = await api.get("/doctors");
        setDoctors(response.data.data);
      } catch (err) {
        console.error(`Error fetching doctors: ${err}`);
        setErrorDoctors("Failed to load doctor list.");
        setLoadingDoctors(false);
      } finally {
        setLoadingDoctors(false);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <DoctorsContext.Provider
      value={{
        doctors,
        loadingDoctors,
        errorDoctors,
      }}
    >
      {children}
    </DoctorsContext.Provider>
  );
};

export default DoctorsContext;
