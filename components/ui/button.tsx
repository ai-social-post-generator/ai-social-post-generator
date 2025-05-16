// components/ui/button.tsx
import React from 'react';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${props.className || ''}`}
    />
  );
}
