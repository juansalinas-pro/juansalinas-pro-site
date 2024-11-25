import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { GeistSans, GeistMono } from 'geist/font'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Juan Salinas",
  description: "juansalinas.xyz: Coding, Startups",
  icons: {
    icon: "/favicon.ico", // Path to your favicon in the public directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  )
}

