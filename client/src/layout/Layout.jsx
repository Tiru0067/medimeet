import { Outlet } from "react-router-dom";
import Header from "./Header";

import "./styles.css";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
