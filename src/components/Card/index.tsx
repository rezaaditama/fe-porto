import { Link } from 'react-router-dom';
import GithubIcon from '../../components/Icons/GithubIcon';

const Card = () => {
  const handleButton = () => {
    window.location.href = 'https://github.com/rezaaditama/fe-sukaharja';
  };
  return (
    <div className='rounded-xl shadow-md border border-gray-200 justify-between flex flex-col bg-white space-y-3 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:bg-slate-50'>
      <img
        src='/assets/images/project-1.png'
        alt='project'
        className='h-48 object-cover'
      />
      <h1 className='font-bold text-slate-800 text-center text-xl capitalize'>
        Project Website Sukaharja
      </h1>
      <div className='space-x-1.5 px-2 flex justify-center flex-wrap items-center'>
        <span className='text-xs py-1 px-2 rounded-xl bg-blue-100 text-blue-800'>
          React Js
        </span>
        <span className='text-xs py-1 px-2 rounded-xl bg-blue-100 text-blue-800'>
          React Js
        </span>
        <span className='text-xs py-1 px-2 rounded-xl bg-blue-100 text-blue-800'>
          React Js
        </span>
        <span className='text-xs py-1 px-2 rounded-xl bg-blue-100 text-blue-800'>
          JavaScript
        </span>
        <span className='text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800 cursor-pointer'>
          ...
        </span>
      </div>
      <p className='text-justify text-base text-black/75 line-clamp-4 leading-5 tracking-wide px-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, temporibus
        ullam accusamus corrupti vel sapiente reiciendis praesentium saepe
        suscipit minus? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Aliquam facere magnam ducimus iste blanditiis dolor asperiores
        aspernatur provident exercitationem rem inventore repellat laudantium
        accusantium beatae velit voluptatem, mollitia nobis officia! Perferendis
        eos ipsam temporibus quam nisi delectus itaque eum voluptatum cum! Animi
        sunt culpa sapiente odio exercitationem iure, quidem, architecto
        voluptatum ab consequatur est beatae ratione dolorum rem quis
        accusantium at quam numquam accusamus tempora suscipit modi saepe!
        Minima doloribus quisquam quidem molestias vitae. Accusamus sed quam
        exercitationem voluptatem molestias ratione neque iure quaerat cumque
        quas ullam enim delectus cum, numquam reiciendis inventore consectetur
        tenetur consequatur eos rem perferendis ea.
      </p>
      <div className='px-5 pb-5 flex items-center w-full space-x-2'>
        <button
          className='bg-slate-800  text-white hover:bg-slate-900 font-bold rounded-md py-1.5 text-base capitalize w-full cursor-pointer transition duration-300'
          onClick={handleButton}
          aria-label='Lihat detail project Sukaharja'
          title='View Project'
        >
          View Project
        </button>
        <Link
          to='https://github.com/rezaaditama/fe-sukaharja'
          target='_blank'
          rel='noreferrer'
          className='p-1 rounded-full hover:bg-slate-200 transition duration-500'
          title='Lihat di GitHub'
        >
          <GithubIcon size={28} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
