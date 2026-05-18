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
  title: {
    default: "ObviouslyBad | Make bad ideas obvious",
    template: "%s | ObviouslyBad",
  },
  description:
    "Free public startup idea stress testing. Find out why your idea might fail before you waste months building it.",
  applicationName: "ObviouslyBad",
  openGraph: {
    title: "ObviouslyBad | Make bad ideas obvious",
    description:
      "Free public startup idea stress testing. Find out why your idea might fail before you waste months building it.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ObviouslyBad | Make bad ideas obvious",
    description:
      "Free public startup idea stress testing. Find out why your idea might fail before you waste months building it.",
  },
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
      <body className="min-h-full flex flex-col bg-black text-zinc-50 selection:bg-indigo-500/30 selection:text-zinc-50">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(900px_circle_at_85%_10%,rgba(168,85,247,0.22),transparent_55%),radial-gradient(900px_circle_at_50%_120%,rgba(34,211,238,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#05050a]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:18px_18px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
