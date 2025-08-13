import GithubHeadMap from '../GithubHeatMap';

const AboutStats = () => {
  return (
    <>
      <h1 className='font-bold text-blue-800 text-xl text-center'>
        Github Commit Activity
      </h1>
      <GithubHeadMap username={'rezaaditama'}></GithubHeadMap>
    </>
  );
};

export default AboutStats;
