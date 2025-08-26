import HeroImage from '../../components/Hero/HeroImage';
import HeroText from '../../components/Hero/HeroText';

const HomeSection = () => {
  return (
    <div
      id='home'
      className='w-full bg-gray-200/40 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-x-10 px-10 pt-11 md:pt-14 dark:bg-surface'
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
