"use client";
import "./globals.css";

export const metadata = {
  title: "Audiocuentos",
  description: "Audiocuentos para niños",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
