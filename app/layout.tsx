import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OSR Enterprise',
  description: 'Leading manufacturer of bottle grade PET resin in Southeast Asia since 1992',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
        <Navbar />
        </div>
        <div className="min-h-[72vh] pt-18">
          {children}
          </div>
        <Footer />
        </body>
    </html>
  );
}
