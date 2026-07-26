import { memo } from 'react';
import { useInView } from '../../hooks/useInView';
import { classNames } from '../../utils/helpers';

const transforms = {
  up: 'translate-y-6',
  down: '-translate-y-6',
  left: '-translate-x-6',
  right: 'translate-x-6',
  none: '',
};

function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1,
  as: Tag = 'div',
}) {
  const [ref, isInView] = useInView({ threshold });

  return (
    <Tag
      ref={ref}
      className={classNames(
        'transition-all duration-700 ease-out',
        isInView
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${transforms[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default memo(FadeIn);
