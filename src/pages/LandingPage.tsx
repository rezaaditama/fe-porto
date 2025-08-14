import Navbar from '../layouts/Navbar';
import HomeSection from '../layouts/HomeSection';
import Footer from '../layouts/Footer';
import { lazy, Suspense } from 'react';
import LazyRender from '../utils/LazyRender';
import { LoadingText } from '../components/Loading';

const AboutSection = lazy(() => import('../layouts/AboutSection'));
const ProjectSection = lazy(() => import('../layouts/ProjectSection'));
const ContactSection = lazy(() => import('../layouts/ContactSection'));

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Suspense fallback={<LoadingText />}>
        <LazyRender>
          <AboutSection />
        </LazyRender>
      </Suspense>
      <Suspense fallback={<LoadingText />}>
        <LazyRender>
          <ProjectSection />
        </LazyRender>
      </Suspense>
      <Suspense fallback={<LoadingText />}>
        <LazyRender>
          <ContactSection />
        </LazyRender>
      </Suspense>
      <Footer />
    </>
  );
};

export default LandingPage;
