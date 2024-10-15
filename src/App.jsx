import AboutSection from "./components/AboutSection";
import BenefitSection from "./components/BenefitSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/LocationSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BenefitSection />
      <LocationSection />
      <AboutSection />
      <div className="lg:hidden">
        <FAQSection />
      </div>
      <FooterSection />
    </>
  );
}

export default App;
