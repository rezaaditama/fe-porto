import HeroImage from '../../components/Hero/HeroImage';
import HeroText from '../../components/Hero/HeroText';

const HomeSection = () => {
  return (
    <div
      id='home'
      className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100 gap-x-10 px-10 pt-11 md:pt-14'
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
