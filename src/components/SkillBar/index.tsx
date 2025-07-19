type SkillBarProps = {
  label: string;
  value: number;
};

const SkillBar = ({ label, value }: SkillBarProps) => {
  return (
    <div className='grid items-center gap-x- w-full'>
      <span className='font-bold'> {label}</span>
      <div className='border rounded-full h-3 w-full overflow-hidden '>
        <div
          className='bg-red-900 h-full transition-all duration-300 ease-in-out'
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default SkillBar;
