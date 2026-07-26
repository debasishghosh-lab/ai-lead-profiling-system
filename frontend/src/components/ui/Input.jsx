import { forwardRef, memo } from 'react';
import { classNames } from '../../utils/helpers';
import { inputBase, inputError, inputDefault } from '../../utils/inputStyles';

const Input = forwardRef(function Input(
  {
    label,
    error,
    className = '',
    type = 'text',
    id,
    required = false,
    ...props
  },
  ref
) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
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
      <input
        ref={ref}
        id={inputId}
        type={type}
        required={required}
        className={classNames(
          inputBase,
          error ? inputError : inputDefault,
          className
        )}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

export default memo(Input);
