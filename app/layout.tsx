import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "モダンな日本のサイト",
  description: "美しくモダンな日本語のウェブサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
