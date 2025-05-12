import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export function Button({ onClick, disabled, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-500 text-white px-4 py-2 rounded-xl disabled:opacity-50"
    >
      {children}
    </button>
  );
}
