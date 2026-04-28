import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Abaid Ur Rehman | Flutter & Cross-Platform Engineer",
  description:
    "Flutter Developer and Cross-Platform Mobile Engineer building high-performance mobile, web & desktop ecosystems. Lahore, Pakistan.",
  keywords: [
    "Flutter",
    "React Native",
    "Electron",
    "MERN",
    "Mobile Developer",
    "Abaid.dev",
  ],
  authors: [{ name: "Muhammad Abaid Ur Rehman" }],
  openGraph: {
    title: "Muhammad Abaid Ur Rehman | Developer Portfolio",
    description:
      "Building high-performance mobile, web & desktop ecosystems that scale.",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body
        className={`${inter.className} min-h-full bg-[#0a0a0a] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
