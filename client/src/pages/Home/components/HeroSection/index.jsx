import "./styles.css";
import HeroLeft from "./components/HeroLeft";
import banner from "../../../../assets/images/banner.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <HeroLeft />

      <div className="hero-right">
        <img src={banner} alt="cover image" />
      </div>
    </section>
  );
};

export default HeroSection;
