import InfoItem from '../Wrapper/InfoItem';
import EducationIcon from '../Icons/EducationIcon';
import AvailableIcon from '../Icons/AvailableIcon';
import BookIcon from '../Icons/BookIcon';

const AboutText = () => {
  return (
    <div className='space-y-3'>
      <h1 className='text-center font-bold text-xl text-primary'>
        Tentang Saya
      </h1>
      <div>
        <div>
          <p className='text-wrap text-justify leading-tight tracking-wide text-base text-neutral hidden md:block'>
            Saya adalah seorang Frontend Developer yang fokus pada pengembangan
            antarmuka pengguna (UI) modern. Saya menggunakan React sebagai
            library utama, didukung oleh Vite untuk proses development yang
            cepat serta Tailwind CSS untuk menciptakan tampilan yang bersih dan
            responsif. Saya terbiasa membangun arsitektur komponen berdasarkan
            prinsip Atomic Design dan menulis kode dengan TypeScript untuk
            menjaga kualitas serta skalabilitas. Komitmen saya adalah
            mengembangkan aplikasi yang mudah dipelihara (maintainable) dan
            dapat diskalakan (scalable) untuk jangka panjang.
          </p>
          <p className='text-wrap text-justify leading-tight tracking-wide text-base text-neutral block md:hidden'>
            Saya adalah seorang Frontend Developer yang berfokus pada
            pengembangan antarmuka pengguna (UI) modern menggunakan React, Vite,
            dan Tailwind CSS.
          </p>
        </div>
        <div className='space-y-3 flex flex-col mt-3 md:mt-5 mf:space-y-5'>
          <InfoItem
            bgColor={'bg-blue-100'}
            title='Education'
            description={
              'Program Studi Teknik Informatika - Universitas Ibn Khaldun Bogor'
            }
            detail={'Tahun 2023 - Sekarang'}
            icon={<EducationIcon className={'text-blue-800 w-10 md:w-13'} />}
          />
          <InfoItem
            bgColor='bg-yellow-100'
            title='Learning Focus'
            description='React, JavaScript, Typescript, Tailwind CSS'
            icon={<BookIcon className={'text-yellow-400 w-10 md:w-13'} />}
          />
          <InfoItem
            bgColor='bg-green-100'
            title='Availability'
            description='Tersedia untuk magang atau freelance remote.'
            icon={
              <AvailableIcon
                className={'text-green-700 scale-80 w-10 md:w-13'}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AboutText;
