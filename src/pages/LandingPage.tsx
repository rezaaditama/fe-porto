import Navbar from '../components/Navbar';
import AboutSection from '../layouts/AboutSection';
import ContactSection from '../layouts/ContactSection';
import HomeSection from '../layouts/HomeSection';
import ProjectSection from '../layouts/ProjectSection';
import Footer from '../layouts/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default LandingPage;
