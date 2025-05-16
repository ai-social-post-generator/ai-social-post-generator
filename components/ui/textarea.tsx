// components/ui/textarea.tsx
import React from 'react';

type TextareaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

export function Textarea({ value, onChange, placeholder }: TextareaProps) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        height: '150px',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    />
  );
}
