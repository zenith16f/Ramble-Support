import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramble support",
  description: "Ramble support page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/RambleLogo.svg"
        sizes="any"
      />
      <body className={inter.className}>
        <main className="font-body">{children}</main>
      </body>
    </html>
  );
}
