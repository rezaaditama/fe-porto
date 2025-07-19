import GitHubCalendar from 'react-github-calendar';

type GithubHeadMapProps = {
  username: string;
};

const GithubHeadMap = ({ username }: GithubHeadMapProps) => {
  return (
    <div className='w-full'>
      <GitHubCalendar
        username={username}
        blockSize={18}
        blockMargin={4}
        colorScheme='light'
        fontSize={12}
      />
    </div>
  );
};

export default GithubHeadMap;
