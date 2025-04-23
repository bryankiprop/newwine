import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "New Wine ~ Create,Build and Inspire",
  description: "A quote generating application by briandev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
