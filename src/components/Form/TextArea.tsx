import clsx from 'clsx';
import type { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id: string;
  labelClassName?: string;
  name?: string;
  textAreaClassName?: string;
}

const TextArea = ({
  label,
  id,
  labelClassName,
  name,
  textAreaClassName,
  rows = 4,
  ...props
}: TextAreaProps) => {
  const baseStyleTextArea =
    'w-full border text-neutral border-gray-300 py-1.5 rounded-md px-3 resize-none focus:outline-gray-300 focus:outline-1 placeholder-neutral/50';
  const baseStyleLabel =
    'font-semibold text-base text-secondary dark:text-primary';
  return (
    <div>
      {label && (
        <label htmlFor={id} className={clsx(baseStyleLabel, labelClassName)}>
          {label}
        </label>
      )}
      <textarea
        name={name || id}
        id={id}
        className={clsx(baseStyleTextArea, textAreaClassName)}
        rows={rows}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
