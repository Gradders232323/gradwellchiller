import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gradwell-chiller-hire.info512176.chatgpt.site'),
  title: 'Temporary Chiller Hire UK | Gradwell Chiller Hire',
  description: 'Nationwide temporary chiller hire from 50 kW to multi-megawatt packages, with installation and 24/7 engineering support.',
  openGraph: {
    title: 'Chiller Hire. Without Delay. | Gradwell Chiller Hire',
    description: 'Temporary chillers from 50 kW to multi-megawatt packages, installed and supported nationwide.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chiller Hire. Without Delay. | Gradwell Chiller Hire',
    description: 'Temporary chillers from 50 kW to multi-megawatt packages, installed and supported nationwide.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
