import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <input
      className="border rounded-xl px-4 py-2 w-full"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
