import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORVANTIS | Financial clarity for a digital world",
  description:
    "Explore digital assets, understand crypto markets and build your financial knowledge with ORVANTIS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
