// import HeroImage from '../../components/Hero/HeroImage';
import { useEffect, useState } from 'react';
import AvailableIcon from '../../components/Icons/AvailableIcon';
import EducationIcon from '../../components/Icons/EducationIcon';
import FocusIcon from '../../components/Icons/FocusIcon';
import InfoItem from '../../components/InfoItem';
import { getAllSkill } from '../../services/skill.service.ts';
import BarChartHorizontal from '../../components/Chart/BarChartHorizontal.tsx';

const AboutSection = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    // const fetchSkills = async () => {
    //   const response = await getAllSkill();
    //   const data = response.map(
    //     (skill: { language: string; percentage: number }) => ({
    //       label: skill.language,
    //       value: skill.percentage,
    //     })
    //   );
    //   setSkills(data);
    //   console.log(skills);
    // };
    fetchSkill();
  }, []);

  const fetchSkill = async () => {
    try {
      const response = await getAllSkill();
      console.log(response);
      const data = response.map(
        (skill: { language: string; percentage: number }) => ({
          label: skill.language,
          value: skill.percentage,
        })
      );
      setSkills(data);
    } catch (error) {
      console.log('error fething : ', error);
    }
  };

  useEffect(() => {
    console.log('Updated skills:', skills);
  }, [skills]);

  return (
    <div
      id='about'
      className='scroll-mt-24 bg-gray-50 w-full py-7 min-h-screen'
    >
      <h1 className='text-center text-2xl font-extrabold text-blue-800'>
        Tentang Saya
      </h1>
      <div className='grid px-10 gap-5 md:mt-5 md:grid-cols-2'>
        <section className='shadow-xl py-6 px-6 rounded-xl flex flex-col md:px-4'>
          <div>
            <div>
              <p className=' text-wrap text-justify leading-tight tracking-wide text-base max-w-prose'>
                Saya adalah seorang Frontend Developer yang fokus pada
                pengembangan antarmuka pengguna (UI) modern. Saya menggunakan
                React sebagai library utama, didukung oleh Vite untuk proses
                development yang cepat serta Tailwind CSS untuk menciptakan
                tampilan yang bersih dan responsif. Saya terbiasa membangun
                arsitektur komponen berdasarkan prinsip Atomic Design dan
                menulis kode dengan TypeScript untuk menjaga kualitas serta
                skalabilitas.
              </p>
            </div>
            <div className='gap-y-6 flex flex-col mt-5'>
              <InfoItem
                bgColor='bg-blue-100'
                title='Education'
                description='Program Studi Teknik Informatika - Universitas Ibn Khaldun
                    Bogor'
                detail='Tahun 2023 - Sekarang'
                icon={<EducationIcon size={55} color='#2563eb' />}
              />
              <InfoItem
                bgColor='bg-yellow-100'
                title='Learning Focus'
                description='React, JavaScript, Typescript, Tailwind'
                icon={<FocusIcon size={55} color='#ca8a04' />}
              />
              <InfoItem
                bgColor='bg-green-100'
                title='Availability'
                description='Tersedia untuk magang atau freelance remote.'
                icon={<AvailableIcon size={55} color='#16a34a' />}
              ></InfoItem>
            </div>
          </div>
        </section>
        {/* <section className='items-center justify-center hidden md:flex'>
          <HeroImage />
        </section> */}
        <section className='shadow-xl py-6 px-6 rounded-xl flex flex-col space-y-2 justify-center md:px-4'>
          <h1 className='text-center font-extrabold text-xl'>
            Bahasa Pemrograman
          </h1>
          <BarChartHorizontal data={skills} />
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
