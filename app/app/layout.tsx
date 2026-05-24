import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import DisclaimerPopup from '@/components/layout/DisclaimerPopup';
import LayoutWrapper from '@/components/layout/LayoutWrapper';

export const metadata: Metadata = {
  title: 'AMS Legal — Advocate Meet Shah',
  description: 'Strategic Legal Representation for Real Estate, Wealth & Commercial Disputes in Mumbai.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Toaster position="top-right" richColors />
        <DisclaimerPopup />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
