// import HeroImage from '../../components/Hero/HeroImage';
import { useEffect, useState } from 'react';
import AvailableIcon from '../../components/Icons/AvailableIcon';
import EducationIcon from '../../components/Icons/EducationIcon';
import FocusIcon from '../../components/Icons/FocusIcon';
import InfoItem from '../../components/InfoItem';
import { getAllSkill } from '../../services/skill.service.ts';
import GithubHeadMap from '../../components/GithubHeatMap/index.tsx';
import PieChartDiagram from '../../components/Chart/PieChartDiagram.tsx';

type Skill = {
  label: string;
  value: number;
};

const AboutSection = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  useEffect(() => {
    const fetchSkills = async () => {
      const response = await getAllSkill();
      const data = response.map(
        (skill: { language: string; percentage: number }) => ({
          label: skill.language,
          value: skill.percentage,
        })
      );
      setSkills(data);
      console.log(skills);
    };
    fetchSkills();
  }, []);

  return (
    <div id='about' className='bg-gray-50 w-full py-7'>
      <div className='grid px-10 grid-cols-1 gap-5 md:grid-cols-2'>
        <section className='shadow-md py-4 px-6 rounded-xl flex flex-col bg-gray-50 space-y-4 md:px-4'>
          <h1 className='text-center font-bold text-xl text-blue-800'>
            Tentang Saya
          </h1>
          <div>
            <div>
              <p className='text-wrap text-justify leading-tight tracking-wide text-base'>
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
            <div className='gap-y-4 flex flex-col mt-5'>
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
        <section className='shadow-md py-4 px-6 rounded-xl space-y-4 bg-gray-50 md:px-4'>
          <h1 className='text-center font-bold text-blue-800 text-xl'>
            Github Activity Language
          </h1>
          <PieChartDiagram data={skills} />
        </section>
        <section className='md:col-span-2 shadow-md p-4 space-y-2 rounded-xl'>
          <h1 className='font-bold text-blue-800 text-xl text-center'>
            Github Commit Activity
          </h1>
          <GithubHeadMap username={'rezaaditama'}></GithubHeadMap>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
