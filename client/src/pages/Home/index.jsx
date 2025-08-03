import HeroSection from "./components/HeroSection";
import "./styles.css";
import MainContent from "./components/MainContent";
import { SearchProvider } from "./searchContext";

const Home = () => {
  return (
    <SearchProvider>
      <HeroSection />
      <MainContent />
    </SearchProvider>
  );
};

export default Home;
