import { forwardRef, memo } from 'react';
import { classNames } from '../../utils/helpers';
import { inputBase, inputError, inputDefault } from '../../utils/inputStyles';

const Textarea = forwardRef(function Textarea(
  {
    label,
    error,
    className = '',
    id,
    rows = 4,
    required = false,
    ...props
  },
  ref
) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-300"
        >
          {label}
          {required && (
            <span className="ml-1 text-red-400" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        required={required}
        className={classNames(
          inputBase,
          'resize-none',
          error ? inputError : inputDefault,
          className
        )}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${textareaId}-error`}
          className="text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

export default memo(Textarea);
