// components/ui/input.tsx
import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
      }}
    />
  );
}
