import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '420 Nation - Cannabis Wellness Platform',
  description: 'The premier integrated cannabis wellness platform connecting consumers, dispensaries, healthcare professionals, and community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}