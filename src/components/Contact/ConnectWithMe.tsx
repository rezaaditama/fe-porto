import SocialLinkCard from '../Wrapper/SocialLinkCard';
import GithubIcon from '../Icons/GithubIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';

const ConnectWithMe = () => {
  return (
    <div className='bg-white rounded-md border-1 p-5 border-gray-200 shadow-md h-fit hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:bg-slate-50'>
      <h2 className='text-center text-2xl font-bold text-blue-800'>
        Connect With Me
      </h2>
      <div className='flex flex-wrap space-x-2 justify-center'>
        <SocialLinkCard
          title={'Github'}
          className='py-2 px-4 hover:bg-gray-300'
          url={'https://github.com/rezaaditama'}
          bgColor={'bg-gray-100'}
        >
          <GithubIcon size={35} />
        </SocialLinkCard>
        <SocialLinkCard
          title={'Instagram'}
          className='p-2 hover:bg-gray-300'
          url={'https://www.instagram.com/reza.aditama._/'}
          bgColor={'bg-gray-100'}
        >
          <InstagramIcon size={35} />
        </SocialLinkCard>
        <SocialLinkCard
          title={'Linkedin'}
          className='py-2 px-3 hover:bg-gray-300'
          url={'https://www.instagram.com/reza.aditama._/'}
          bgColor={'bg-gray-100'}
        >
          <LinkedinIcon size={35} className={'text-black'} />
        </SocialLinkCard>
      </div>
    </div>
  );
};

export default ConnectWithMe;
