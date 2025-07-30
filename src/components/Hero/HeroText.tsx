import Button from '../Button';

const HeroText = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='space-y-3'>
        <h1 className='text-2xl font-bold text-center md:text-left md:text-5xl'>
          Halo, Saya<span className='text-blue-800'> Reza Aditama </span>
        </h1>
        <p className='text-justify leading-tight tracking-wide text-base'>
          Saya seorang <span className='font-bold'> Frontend Developer </span>
          yang fokus pada pengembangan UI dengan React + Vite dan Tailwind CSS.
          Saya senang membangun antarmuka yang cepat, responsif dan efisien
          menggunakan ekosistem JavaScript modern.
        </p>
        <div className='space-x-4 flex justify-center'>
          <Button variant='primary' className='w-full' to='about'>
            Tentang Saya
          </Button>
          <Button variant='secondary' className='w-full' to='project'>
            Lihat Proyek
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
