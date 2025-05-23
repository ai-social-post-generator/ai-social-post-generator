// components/ui/textarea.tsx
import React from "react";

export function Textarea({ ...props }) {
  return (
    <textarea
      {...props}
      className="border p-2 rounded w-full"
    />
  );
}
