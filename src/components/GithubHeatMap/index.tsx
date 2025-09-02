import GitHubCalendar from 'react-github-calendar';
import { useTheme } from '../../context/ThemeContext';

type GithubHeadMapProps = {
  username: string;
};

const GithubHeadMap = ({ username }: GithubHeadMapProps) => {
  const { theme } = useTheme();
  return (
    <div className='w-full overflow-x-auto text-neutral/80'>
      <GitHubCalendar
        username={username}
        blockSize={18}
        blockMargin={4}
        colorScheme={theme}
        fontSize={12}
      />
    </div>
  );
};

export default GithubHeadMap;
