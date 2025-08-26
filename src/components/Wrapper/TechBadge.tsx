import clsx from 'clsx';

interface TechBadgeProps {
  className?: string;
  tech: string;
}

const TechBadge = ({ className, tech }: TechBadgeProps) => {
  const baseStyle =
    'text-xs py-1 px-2 rounded-xl bg-blue-100 text-blue-800 capitalize dark:bg-gray-100 dark:text-gray-800';
  return <span className={clsx(baseStyle, className)}>{tech}</span>;
};

export default TechBadge;
