import { Routes, Route } from "react-router-dom";
import { DoctorsProvider } from "./context/DoctorsContext";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import DoctorDetail from "./pages/DoctorDetail/";
import AppointmentConfirmation from "./pages/AppointmentConfirmation";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <DoctorsProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="doctor/:id" element={<DoctorDetail />} />
          <Route path="confirm" element={<AppointmentConfirmation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </DoctorsProvider>
  );
};

export default App;
