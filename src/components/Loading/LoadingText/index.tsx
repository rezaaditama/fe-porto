import React from 'react';
import styles from './LoadingText.module.css';

const LoadingText: React.FC = () => {
  const text = 'Loading...';

  return (
    <div className='flex items-center justify-center py-5'>
      <h1 className='text-xl font-bold flex items-center justify-center'>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={styles.waveAnimation + ' text-blue-700'}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default LoadingText;
