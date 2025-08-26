import type { ReactNode } from 'react';
import GithubIcon from '../Icons/GithubIcon';
import clsx from 'clsx';
import { RouterLink } from '../Navigate';
import SocialLinkCard from '../Wrapper/SocialLinkCard';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const baseStyleCard =
  'flex flex-col justify-between rounded-md shadow-md space-y-3 overflow-hidden hover:shadow-xl animation-card dark:border dark:border-primary/8';

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
      <img src={path} alt={title} className='h-48 object-cover w-full' />
      <h1 className='font-bold text-secondary text-center text-xl capitalize dark:text-primary'>
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
  url_web?: string;
  source_github: string;
}

const Footer = ({ url_web, source_github }: FooterProps) => {
  return (
    <>
      {url_web ? (
        <div className='px-5 pb-5 flex items-center w-full space-x-2'>
          <RouterLink
            className='w-full'
            to={url_web}
            variant={'primary'}
            target='_blank'
            rel='noreferrer'
          >
            View Project
          </RouterLink>
          <SocialLinkCard
            className='p-2 hover:bg-neutral/10'
            bgColor={'bg-gray-100'}
            target='_blank'
            rel='noreferrer'
            to={'https://github.com/rezaaditama'}
            variant='circle'
            title='Lihat di GitHub'
          >
            <GithubIcon size={28} className={'text-neutral/80'} />
          </SocialLinkCard>
        </div>
      ) : (
        <div className='px-5 pb-5 flex items-center w-full'>
          <RouterLink
            className='w-full'
            to={source_github}
            variant={'primary'}
            target='_blank'
            rel='noreferrer'
            title='Lihat di GitHub'
          >
            View Github
          </RouterLink>
        </div>
      )}
    </>
  );
};

Card.Header = Head;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
