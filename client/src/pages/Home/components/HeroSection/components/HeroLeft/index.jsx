import SearchForm from "../SearchForm";
import "./styles.css";

const HeroLeft = () => {
  return (
    <div className="hero-left">
      <div className="hero-content">
        <h1>Find Your Doctor</h1>
        <p>
          Discover trusted professionals near you, compare ratings, and book
          appointments in minutes - Whether it's a routine checkup or a
          specialist consultation, we've got you covered.
        </p>

        <SearchForm />
      </div>
    </div>
  );
};

export default HeroLeft;
