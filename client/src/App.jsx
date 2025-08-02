import { Routes, Route } from "react-router-dom";
import { DoctorsProvider } from "./context/DoctorsContext";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import DoctorDetail from "./pages/DoctorDetail/DoctorDetail";

const App = () => {
  return (
    <DoctorsProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
        </Route>
      </Routes>
    </DoctorsProvider>
  );
};

export default App;
