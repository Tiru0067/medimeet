import { useContext } from "react";
import DoctorsContext from "../context/DoctorsContext";

export const useDoctors = () => useContext(DoctorsContext);
