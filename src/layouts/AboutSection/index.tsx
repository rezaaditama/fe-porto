import HeroImage from '../../components/Hero/HeroImage';
import AvailableIcon from '../../components/Icons/AvailableIcon';
import EducationIcon from '../../components/Icons/EducationIcon';
import FocusIcon from '../../components/Icons/FocusIcon';
import IconWrapper from '../../components/IconWrapper';

const AboutSection = () => {
  return (
    <div id='about' className='bg-gray-50 w-full py-10 min-h-screen md:pt-10'>
      <h1 className='text-center text-2xl font-extrabold text-blue-800'>
        Tentang Saya
      </h1>
      <div className='grid grid-cols-2 px-10 gap-5 mt-8'>
        <section className='flex items-center justify-center'>
          <HeroImage />
        </section>
        <section className='shadow-xl p-5 rounded-xl flex items-center justify-center flex-col'>
          <div>
            <div>
              <p className='text-justify leading-tight tracking-wide text-base'>
                Saya adalah seorang Frontend Developer yang memiliki
                ketertarikan terhadap pengembangan antarmuka pengguna (UI)
                modern. Saya menggunakan React sebagai library utama, didukung
                oleh Vite untuk pengembangan yang cepat serta Tailwind CSS untuk
                membangun tampilan yang bersih dan responsif. Saya terbiasa
                menerapkan arsitektur komponen, mengikuti prinsip Atomic Design
                dan menggunakan TypeScript untuk menjaga kualitas serta
                skalabilitas kode dengan pendekatan clean code serta reusable
                component. Saya percaya bahwa UI yang baik tidak hanya indah
                secara visual, tetapi juga mudah digunakan dan performa tinggi.
              </p>
            </div>
            <div className='space-y-4 flex flex-col mt-5'>
              <div className='flex space-x-4'>
                <IconWrapper bgColor='bg-blue-100'>
                  <EducationIcon size={60} color='#2563eb'></EducationIcon>
                </IconWrapper>
                <div>
                  <h2 className='font-bold text-base'>Education</h2>
                  <p className='text-sm leading-tight'>
                    Program Studi Teknik Informatika - Universitas Ibn Khaldun
                    Bogor <br />
                    <span className='text-gray-600'>Tahun 2023 - Sekarang</span>
                  </p>
                </div>
              </div>
              <div className='flex space-x-4'>
                <IconWrapper bgColor='bg-yellow-100'>
                  <FocusIcon size={60} color='#ca8a04' />
                </IconWrapper>
                <div>
                  <h2 className='font-bold text-base'>Learning Focus</h2>
                  <p className='text-sm leading-tight'>
                    React, JavaScript, Typescript, Tailwind
                  </p>
                </div>
              </div>
              <div className='flex space-x-4'>
                <IconWrapper bgColor='bg-green-100'>
                  <AvailableIcon size={60} color='#16a34a' />
                </IconWrapper>
                <div>
                  <h2 className='font-bold text-base'>Availability</h2>
                  <p className='text-sm leading-tight'>
                    Tersedia untuk magang atau freelance remote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
