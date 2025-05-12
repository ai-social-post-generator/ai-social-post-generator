import React from 'react';

type TextareaProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
  className?: string;
};

export function Textarea({ value, onChange, readOnly, className }: TextareaProps) {
  return (
    <textarea
      className={`border rounded-xl px-4 py-2 w-full ${className || ''}`}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
}
