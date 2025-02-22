import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local'

const dosis = localFont({
  src: [
    { path: '../../public/font/Dosis.ttf' },
  ],
  variable: "--font-dosis"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dosis.variable}`}>
        {children}
      </body>
    </html>
  )
}

//#region Metadata
const url = new URL(process.env.NEXT_PUBLIC_CURR_DOMAIN || 'https://lunarshell.lunarlabs.cc');
const title = 'LunarShell - Modern Linux Shell Environment';
const description = 'A modern, elegant, and secure shell environment that transforms your Linux terminal experience with smart configurations, enhanced security, and beautiful customizations.';
const images: string[] = [
  url.toString() + 'img/website_preview.png'
];

export const metadata: Metadata = {
  metadataBase: url,
  title: title,
  description: description,
  openGraph: {
    siteName: 'LunarShell',
    type: "website",
    emails: ['emily@lunarlabs.cc'],
    locale: 'en_GB',
    url: url,
    title: title,
    description: description,
    images: images
  },
}
//#endregion
