'use client';

import { Barlow, Barlow_Condensed, Bellefair  } from "next/font/google";
import Head from "next/head"; // ✅ import Head
import "./globals.css";
import NavButton from '@/components/mobile_nav.js';
import './globals.css';
import { usePathname } from 'next/navigation';


const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: specify weights you want
  variable: "--font-barlow-condensed",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400", // Bellefair usually has just one weight
  variable: "--font-bellefair",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional: specify weights you want
  variable: "--font-barlow",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  let bodyClass = '';
  if (pathname.startsWith('/destinations')) {
    bodyClass = 'destination';
  } else if (pathname.startsWith('/crew')) {
    bodyClass = 'crew';
  } else if (pathname.startsWith('/technology')) {
    bodyClass = 'technology';
  } else {
    bodyClass = 'home';
  }
  return (
    <html lang="en">
         <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${bodyClass} ${barlowCondensed.variable} ${bellefair.variable} ${barlow.variable}`}>
      <NavButton></NavButton>
        {children}
      </body>
    </html>
  );
}
