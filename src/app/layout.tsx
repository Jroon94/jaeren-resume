import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './app.css';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Jae Ren Resume',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} flex w-full h-full bg-white`}>
        {children}
      </body>
    </html>
  );
}
