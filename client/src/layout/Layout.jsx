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

      <footer className="site-footer">
        <p>&copy; 2025 MediMeet</p>
      </footer>
    </>
  );
};

export default Layout;
