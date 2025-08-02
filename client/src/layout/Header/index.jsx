import { Link } from "react-router-dom";
import heartbeat from "../../assets/svgs/heartbeat_poly.svg";
import "./styles.css";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={heartbeat} alt="heartbeat logo" className="logo-icon" />
          <span className="logo-text">MediMeet</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
