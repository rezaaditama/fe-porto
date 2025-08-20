import AboutDiagram from '../../components/About/AboutDiagram.tsx';
import AboutStats from '../../components/About/AboutStats.tsx';
import AboutText from '../../components/About/AboutText.tsx';

const AboutSection = () => {
  return (
    <div id='about' className='w-full py-7 dark:bg-surface'>
      <div className='grid px-10 grid-cols-1 gap-5 md:grid-cols-2'>
        <section className='shadow-md border-gray-200 py-4 px-6 rounded-xl flex flex-col border-1 dark:border-primary/50 space-y-4 md:px-4'>
          <AboutText />
        </section>
        <section className='shadow-md border-gray-200 py-4 px-6 rounded-xl space-y-4 border-1 dark:border-primary/50 md:px-4'>
          <AboutDiagram />
        </section>
        <section className='md:col-span-2 border-gray-200 shadow-md p-4 space-y-2 rounded-xl border-1 dark:border-primary/50'>
          <AboutStats />
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
