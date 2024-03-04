import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head'; // Import the Head component

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Galactix HQ",
  description: "Galactix Head Quarters. Solana Project In Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
        <title>{"Galactix HQ"}</title>
        <meta name="description" content={"Galactix Head Quarters. Solana Project In Development."} />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Galactix HQ"} />
        <meta name="twitter:description" content={"Galactix Head Quarters. Solana Project In Development."} />
        <meta name="twitter:image" content="https://www.galactixhq.io/_next/static/media/landing.a0e8a4d6.gif" />

        {/* Open Graph data */}
        <meta property="og:title" content={"Galactix HQ"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://galactixhq.io" />
        <meta property="og:image" content="https://www.galactixhq.io/_next/static/media/landing.a0e8a4d6.gif" />
        <meta property="og:description" content={"Galactix Head Quarters. Solana Project In Development."} />
        <meta property="og:site_name" content="Galactix HQ" />
        {/* Add more tags as needed */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
