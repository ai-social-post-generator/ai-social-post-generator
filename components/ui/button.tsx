// components/ui/button.tsx
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
      style={{
        backgroundColor: '#0070f3',
        color: '#fff',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
