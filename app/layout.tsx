import type { Metadata } from 'next';
import type { Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { GeistSans } from 'geist/font/sans'
import MobileMenu from "@/components/mobile-menu"
import { Toaster } from "@/components/ui/toaster"
import { MobileHeader } from '@/components/mobile-header';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://catalyst.forge.trade'),
  title: 'Catalyst | Perpetuals on Forge',
  description: 'Leveraged perpetual futures trading on Evmos.',
};
export const viewport = {
  width: 'device-width',
  initialScale: 0.8,
  maximumScale: 1,
  userScalable: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'max-w-[100vw] min-h-screen bg-background font-sans antialiased overflow-x-hidden',
          GeistSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MobileHeader />
          {children}
          <MobileMenu />
          <Toaster />
         
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
