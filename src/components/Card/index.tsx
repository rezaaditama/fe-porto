import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '../Icons/GithubIcon';
import clsx from 'clsx';
import Button from '../Button';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const baseStyleCard =
  'flex flex-col justify-between rounded-xl shadow-md space-y-3 overflow-hidden bg-surface hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:bg-slate-50 dark:border dark:border-primary/20 dark:hover:bg-slate-700/10';

const Card = ({ children, className }: CardProps) => {
  return <div className={clsx(baseStyleCard, className)}>{children}</div>;
};
interface HeadProps {
  path: string;
  title: string;
  children: ReactNode;
}

const Head = ({ path, title, children }: HeadProps) => {
  return (
    <div className='space-y-2'>
      <img src={path} alt='project' className='h-48 object-cover' />
      <h1 className='font-bold text-slate-800 text-center text-xl capitalize dark:text-primary'>
        {title}
      </h1>
      <div className='flex px-5 justify-center'>{children}</div>
    </div>
  );
};

interface BodyProps {
  description: string;
}

const Body = ({ description }: BodyProps) => {
  return (
    <div>
      <p className='text-justify text-base text-neutral/75 line-clamp-4 leading-5 tracking-wide px-5'>
        {description}
      </p>
    </div>
  );
};

interface FooterProps {
  url: string;
}

const Footer = ({ url }: FooterProps) => {
  return (
    <div className='px-5 pb-5 flex items-center w-full space-x-2'>
      <Button className='w-full' to={url} aria-label='Github Project'>
        View Project
      </Button>

      <Link
        to={url}
        target='_blank'
        rel='noreferrer'
        className='p-1 rounded-full hover:bg-slate-200 transition duration-500 dark:bg-neutral/50'
        title='Lihat di GitHub'
      >
        <GithubIcon size={28} />
      </Link>
    </div>
  );
};

Card.Header = Head;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
