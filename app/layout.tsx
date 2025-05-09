// File: app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'AI Social Post Generator',
  description: 'Generate social media posts using AI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
