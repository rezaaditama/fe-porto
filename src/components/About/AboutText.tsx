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
          <p className='text-wrap text-justify leading-tight tracking-wide text-base text-neutral'>
            Saya adalah seorang Frontend Developer yang fokus pada pengembangan
            antarmuka pengguna (UI) modern. Saya menggunakan React sebagai
            library utama, didukung oleh Vite untuk proses development yang
            cepat serta Tailwind CSS untuk menciptakan tampilan yang bersih dan
            responsif. Saya terbiasa membangun arsitektur komponen berdasarkan
            prinsip Atomic Design dan menulis kode dengan TypeScript untuk
            menjaga kualitas serta skalabilitas.
          </p>
        </div>
        <div className='gap-y-4 flex flex-col mt-5'>
          <InfoItem
            bgColor='bg-blue-100'
            title='Education'
            description='Program Studi Teknik Informatika - Universitas Ibn Khaldun
                    Bogor'
            detail='Tahun 2023 - Sekarang'
            icon={<EducationIcon size={50} className={'text-blue-800'} />}
          />
          <InfoItem
            bgColor='bg-yellow-100'
            title='Learning Focus'
            description='React, JavaScript, Typescript, Tailwind CSS'
            icon={<BookIcon size={50} className={'text-yellow-500'} />}
          />
          <InfoItem
            bgColor='bg-green-100'
            title='Availability'
            description='Tersedia untuk magang atau freelance remote.'
            icon={
              <AvailableIcon size={50} className={'text-green-800 scale-80'} />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AboutText;
