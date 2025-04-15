import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/AboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/Footer/FooterMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain></NavbarMain>
      <HeroMain></HeroMain>
      <HeroGradient></HeroGradient>
      <SubHeroSection></SubHeroSection>
      <AboutMeMain></AboutMeMain>
      <SkillsMain></SkillsMain>
      <SubSkills></SubSkills>
      <ExperienceMain />
      <ContactMeMain />
      <FooterMain></FooterMain>
    </main>
  );
}

export default App;
