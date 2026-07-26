import { memo } from 'react';
import { classNames } from '../../utils/helpers';

const colorMap = {
  blue: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
  purple: 'bg-secondary-500/10 text-secondary-400 border-secondary-500/20',
  green: 'bg-accent-500/10 text-accent-400 border-accent-500/20',
  red: 'bg-red-500/10 text-red-400 border-red-500/20',
  gray: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

function Badge({ children, color = 'blue', className = '' }) {
  return (
    <span
      className={classNames(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  );
}

export default memo(Badge);
