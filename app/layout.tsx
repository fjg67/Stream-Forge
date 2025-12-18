import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Orbitron, Inter, JetBrains_Mono } from 'next/font/google';
import { Providers } from "@/components/Providers";

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-monument',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-satoshi',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "STREAM FORGE - L'Atelier du Streamer | La Référence du Streaming FR",
  description: "Du premier stream à 100k followers – tout le matos, toutes les astuces, toute la vérité. Configurez votre setup idéal, maîtrisez OBS, et forgez votre empire en direct.",
  keywords: [
    'streaming',
    'twitch',
    'youtube',
    'matériel streaming',
    'OBS',
    'streamer',
    'setup gaming',
    'configurateur pc',
    'guide streaming',
    'communauté twitch'
  ],
  authors: [{ name: 'Stream Forge' }],
  creator: 'Stream Forge',
  publisher: 'Stream Forge',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://streamforge.com',
    title: 'STREAM FORGE - Forge Ton Empire En Direct',
    description: 'Du premier stream à 100k followers – tout le matos, toutes les astuces, toute la vérité.',
    siteName: 'Stream Forge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STREAM FORGE - La Référence du Streaming FR',
    description: 'Configure ton setup, maîtrise OBS, forge ton empire en direct.',
    creator: '@streamforge',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${orbitron.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
