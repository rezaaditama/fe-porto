import HeroImage from '../../components/Hero/HeroImage';
import HeroText from '../../components/Hero/HeroText';

const HomeSection = () => {
  return (
    <div
      id='home'
      className='w-full bg-gray-200/40 pt-24 gap-y-5 grid grid-cols-1 gap-x-10 px-10 md:pt-14 dark:bg-surface md:grid-cols-2 md:min-h-screen'
    >
      <div className='order-2 md:order-1 flex'>
        <HeroText />
      </div>
      <div className='order-1 md:order-2 flex justify-center'>
        <HeroImage />
      </div>
    </div>
  );
};

export default HomeSection;
