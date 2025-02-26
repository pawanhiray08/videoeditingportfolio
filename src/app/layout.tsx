import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pawan Hiray - Video Editor Portfolio',
  description: 'Professional video editing services by Pawan Hiray. Specializing in creative video editing, color grading, and motion graphics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-primary text-text-primary min-h-screen`}>
        {children}
      </body>
    </html>
  );
}