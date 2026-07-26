import { memo } from 'react';
import { classNames } from '../../utils/helpers';

function Card({ children, className = '', hover = false, glow = false, ...props }) {
  return (
    <div
      className={classNames(
        'glass-card transition-all duration-300',
        hover && 'hover:border-primary-500/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1',
        glow && 'glow-primary',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default memo(Card);
