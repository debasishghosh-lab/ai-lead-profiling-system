import { memo } from 'react';
import { classNames } from '../../utils/helpers';

function SectionHeader({ title, highlight, subtitle, className = '' }) {
  return (
    <div className={classNames('mx-auto max-w-2xl text-center', className)}>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}

export default memo(SectionHeader);
