import HeroImage from './HeroImage';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100 gap-x-10 p-10'>
      <div className='order-2 md:order-1 flex'>
        <HeroText />
      </div>
      <div className='order-1 md:order-2 flex justify-center'>
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
