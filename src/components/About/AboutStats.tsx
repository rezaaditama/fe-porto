import GithubHeadMap from '../GithubHeatMap';

const AboutStats = () => {
  return (
    <>
      <h1 className='font-bold text-primary text-xl text-center'>
        Github Commit Activity
      </h1>
      <GithubHeadMap username={'rezaaditama'} />
    </>
  );
};

export default AboutStats;
