import { getAllSkill } from '../../services/skill.service.ts';
import { useEffect, useState } from 'react';
import PieChartDiagram from '../Chart/PieChartDiagram.tsx';

type Skill = {
  label: string;
  value: number;
};

const AboutDiagram = () => {
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
    <>
      <h1 className='text-center font-bold text-primary text-base md:text-xl'>
        Github Activity Language
      </h1>
      <PieChartDiagram data={skills} />
    </>
  );
};

export default AboutDiagram;
