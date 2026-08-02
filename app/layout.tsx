import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashant K Gupta & Associates | Chartered Accountants | Neemuch",

  description:
    "Prashant K Gupta & Associates is a trusted Chartered Accountancy firm in Neemuch offering Income Tax, GST, Audit, Accounting, Company Registration, Trademark and Business Consultancy services.",

  keywords: [
    "CA in Neemuch",
    "Chartered Accountant Neemuch",
    "GST Consultant",
    "Income Tax Filing",
    "GST Registration",
    "Audit Services",
    "Accounting Services",
    "Company Registration",
    "Trademark Registration",
    "Tax Consultant Neemuch",
  ],

  authors: [{ name: "Prashant K Gupta & Associates" }],

  creator: "Prashant K Gupta & Associates",

  publisher: "Prashant K Gupta & Associates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
