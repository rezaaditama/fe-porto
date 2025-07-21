import Button from '../../components/Button';

const ProjectSection = () => {
  return (
    <div id='project' className='min-h-screen w-full p-5'>
      <h1 className='text-3xl font-bold uppercase text-center underline decoration-4 text-blue-800 py-5'>
        Daftar Project
      </h1>
      <div className='grid md:grid-cols-3 gap-5'>
        <div className='p-5 rounded-xl shadow-xl space-y-2 border border-gray-200 justify-between flex flex-col'>
          <img src='/assets/images/project-1.png' alt='project' />
          <h1 className='font-bold text-blue-800 text-center text-lg capitalize'>
            Project Website Sukaharja
          </h1>
          <div className='space-x-1 px-2 flex justify-center'>
            <span className='text-sm p-1 px-2 rounded-xl font-sans bg-gray-200'>
              React Js
            </span>
            <span className='text-sm p-1 px-2 rounded-xl font-sans bg-gray-200'>
              JavaScript
            </span>
            <span className='text-sm p-1 px-2 rounded-xl font-sans bg-gray-200'>
              TailwindCSS
            </span>
          </div>
          <p className='text-justify text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            temporibus ullam accusamus corrupti vel sapiente reiciendis
            praesentium saepe suscipit minus?
          </p>
          <Button variant={'primary'}>View Project</Button>
        </div>
        <div className='p-5 rounded-xl shadow-xl space-y-2 border border-gray-200 justify-between flex flex-col'>
          <img src='/assets/images/project-1.png' alt='project' />
          <h1 className='font-bold text-blue-800 text-center text-lg capitalize'>
            Project Website Sukaharja
          </h1>
          <p className='text-justify text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            temporibus ullam accusamus corrupti vel sapiente reiciendis
            praesentium saepe suscipit minus?
          </p>
          <Button variant={'primary'}>View Project</Button>
        </div>
        <div className='p-5 rounded-xl shadow-xl space-y-2 border border-gray-200 justify-between flex flex-col'>
          <img src='/assets/images/project-1.png' alt='project' />
          <h1 className='font-bold text-blue-800 text-center text-lg capitalize'>
            Project Website Sukaharja
          </h1>
          <p className='text-justify text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            temporibus ullam accusamus corrupti vel sapiente reiciendis
            praesentium saepe suscipit minus?
          </p>
          <Button variant={'primary'}>View Project</Button>
        </div>
        <div className='w-full text-center md:hidden'>
          <Button variant='secondary' className='w-fit bg-gray-100 text-sm'>
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
