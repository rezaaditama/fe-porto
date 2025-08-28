import SocialLinkCard from '../Wrapper/SocialLinkCard';
import GithubIcon from '../Icons/GithubIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import DownloadIcon from '../Icons/DownloadIcon';

const ConnectWithMe = () => {
  return (
    <div className='mt-5 rounded-md border-1 p-5 border-gray-200 shadow-md h-fit animation-card dark:border-primary/20'>
      <h2 className='text-center text-xl font-bold text-primary md:text-2xl'>
        Connect With Me
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center items-center'>
        <SocialLinkCard
          label={'Github'}
          className='py-2 px-4 hover:bg-neutral/10'
          to={'https://github.com/rezaaditama'}
          target='_blank'
          rel='noreferrer'
          variant={'square'}
          bgColor={'bg-gray-100'}
        >
          <GithubIcon className={'text-neutral/80 w-10'} />
        </SocialLinkCard>
        <SocialLinkCard
          label={'Instagram'}
          className='p-2 hover:bg-neutral/10'
          to={'https://www.instagram.com/reza.aditama._/'}
          target='_blank'
          rel='noreferrer'
          variant={'square'}
          bgColor={'bg-gray-100'}
        >
          <InstagramIcon className={'text-neutral/80 w-10'} />
        </SocialLinkCard>
        <SocialLinkCard
          label={'Linkedin'}
          className='py-2 px-3 hover:bg-neutral/10'
          to={'https://www.instagram.com/reza.aditama._/'}
          target='_blank'
          rel='noreferrer'
          variant={'square'}
          bgColor={'bg-gray-100'}
        >
          <LinkedinIcon className={'text-neutral/80 w-10'} />
        </SocialLinkCard>
        <SocialLinkCard
          label={'CV'}
          className='py-2 px-4 hover:bg-neutral/10'
          to={'https://www.instagram.com/reza.aditama._/'}
          target='_blank'
          rel='noreferrer'
          variant={'square'}
          bgColor={'bg-gray-100'}
        >
          <DownloadIcon className={'text-neutral/80 w-10'} />
        </SocialLinkCard>
      </div>
    </div>
  );
};

export default ConnectWithMe;
