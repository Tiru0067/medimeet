import { createContext, useState, useEffect } from "react";
import api from "../api/doctors";

const DoctorsContext = createContext({});

export const DoctorsProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const response = await api.get("/doctors");
        console.log(response.data.data);
        setDoctors(response.data.data);
      } catch (err) {
        console.error(`Error fetching doctors: ${err}`);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const fetchDoctorById = async (id) => {
    try {
      const response = await api.get(`/doctors/${id}`);
      console.log(response.data);
      setDoctor(response.data);
    } catch (err) {
      console.error(`Error fetching doctor by ID: ${err}`);
      setLoading(false);
    }
  };

  return (
    <DoctorsContext.Provider
      value={{
        doctors,
        doctor,
        fetchDoctorById,
        loading,
      }}
    >
      {children}
    </DoctorsContext.Provider>
  );
};

export default DoctorsContext;
