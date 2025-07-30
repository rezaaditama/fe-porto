const HeroImage = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[35vh] h-[35vh] md:w-[65vh] md:h-[65vh]'>
        <img
          src='/assets/images/hero-1.jpeg'
          alt='Foto Profile'
          className='rounded-full object-cover h-full w-full hover:scale-105 transition duration-300'
        />
      </div>
    </div>
  );
};

export default HeroImage;
