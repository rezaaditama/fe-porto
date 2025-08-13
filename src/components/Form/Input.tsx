import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  labelClassName?: string;
  inputClassName?: string;
  name?: string;
}

const Input = ({
  label,
  id,
  labelClassName,
  type = 'text',
  inputClassName,
  name,
  ...props
}: InputProps) => {
  const baseStyleInput =
    'w-full border border-gray-300 py-1.5 rounded-md px-3 focus:outline-gray-300 focus:outline-1';
  const baseStyleLabel = 'font-semibold text-base text-slate-800';
  return (
    <div>
      {label && (
        <label htmlFor={id} className={clsx(baseStyleLabel, labelClassName)}>
          {label}
        </label>
      )}
      <input
        name={name || id}
        id={id}
        type={type}
        className={clsx(baseStyleInput, inputClassName)}
        {...props}
      />
    </div>
  );
};

export default Input;
