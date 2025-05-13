// app/layout.tsx

import { ReactNode } from 'react';

export const metadata = {
  title: 'AI Social Media Post Generator',
  description: 'Generate social media content using AI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
