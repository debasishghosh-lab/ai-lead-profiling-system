import { classNames } from '../../utils/helpers';

const variants = {
  success: {
    container: 'bg-accent-500/10 border-accent-500/30 text-accent-300',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  error: {
    container: 'bg-red-500/10 border-red-500/30 text-red-300',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  warning: {
    container: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
  },
  info: {
    container: 'bg-primary-500/10 border-primary-500/30 text-primary-300',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export default function Alert({ variant = 'info', children, className = '' }) {
  const style = variants[variant];

  return (
    <div
      className={classNames(
        'flex items-start gap-3 rounded-xl border p-4 animate-fade-in',
        style.container,
        className
      )}
      role="alert"
    >
      <span className="mt-0.5 shrink-0">{style.icon}</span>
      <div className="text-sm">{children}</div>
    </div>
  );
}
