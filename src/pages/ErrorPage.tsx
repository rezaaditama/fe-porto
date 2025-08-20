import { useRouteError } from 'react-router-dom';
import Button from '../components/Button';
import { RouterLink } from '../components/Navigate';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='min-h-screen flex justify-center items-center flex-col space-y-3 bg-gray-50'>
      <h1 className='text-7xl font-extrabold'>Oops!</h1>
      <p className='text-2xl font-bold'>
        {error.status} - {error.statusText}
      </p>
      <p className='text-sm'>
        The page you are looking for may have been removed if its name has
        changed or is temporarily unavailable.
      </p>
      <RouterLink to='/' variant='primary'>
        Go To Home
      </RouterLink>
    </div>
  );
};

export default ErrorPage;
