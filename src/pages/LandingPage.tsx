import Navbar from '../components/Navbar';
import AboutSection from '../layouts/AboutSection';
import ContactSection from '../layouts/ContactSection';
import HomeSection from '../layouts/HomeSection';
import ProjectSection from '../layouts/ProjectSection';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
