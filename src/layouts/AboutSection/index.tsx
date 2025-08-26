import AboutDiagram from '../../components/About/AboutDiagram.tsx';
import AboutStats from '../../components/About/AboutStats.tsx';
import AboutText from '../../components/About/AboutText.tsx';

const AboutSection = () => {
  return (
    <div id='about' className='w-full py-7'>
      <div className='grid px-10 grid-cols-1 gap-5 md:grid-cols-2'>
        <section className='shadow-md border-gray-200 py-4 px-6 rounded-md border space-y-4 dark:border-primary/50 animation-card md:px-4'>
          <AboutText />
        </section>
        <section className='shadow-md border-gray-200 py-4 px-6 rounded-md space-y-4 border dark:border-primary/50 animation-card md:px-4'>
          <AboutDiagram />
        </section>
        <section className='md:col-span-2 border-gray-200 shadow-md p-4 space-y-2 rounded-md border dark:border-primary/50 animation-card'>
          <AboutStats />
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
