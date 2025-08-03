import { Link } from "react-router-dom";
import "./styles.css";
import notFound from "../../assets/images/undraw_page-not-found.png";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={notFound} alt="Page not found" className="not-found-image" />
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="not-found-home-link">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
