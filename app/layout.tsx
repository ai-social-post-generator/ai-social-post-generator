// app/layout.tsx

export const metadata = {
  title: 'AI Social Media Post Generator',
  description: 'Generate posts with AI for Twitter, Instagram, LinkedIn, Facebook',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
