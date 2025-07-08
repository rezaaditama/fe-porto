const Hero = () => {
  return (
    <div className='w-full min-h-screen pt-20 grid grid-cols-2 bg-gray-100 gap-10 px-10'>
      <div className='flex items-center justify-center flex-col'>
        <div className='space-y-4'>
          <h1 className='text-4xl font-bold text-left'>
            <span>Halo,</span> Saya Reza Aditama
          </h1>
          <p className='text-justify'>
            Saya seorang <span className='font-bold'>Frontend Developer</span>{' '}
            yang fokus pada ekosistem JavaScript, terutama menggunakan React
            sebagai framework utama. Saya terbiasa menggunakan Vite sebagai
            tools pengembangan frontend, dan mengimplementasikan tampilan yang
            responsif dengan Tailwind CSS.
          </p>
          <div className='space-x-10 flex justify-center'>
            <button className='bg-blue-500 w-1/3 py-2 rounded-lg font-bold text-white'>
              Tentang Saya
            </button>
            <button className='bg-blue-500 w-1/3 py-2 rounded-lg font-bold text-white'>
              Lihat Proyek
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='w-[65vh] h-[65vh]'>
          <img
            src='/assets/images/hero-1.jpeg'
            alt=''
            className='duration-300 rounded-full object-cover h-full w-full border border-gray-300 hover:scale-110'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
