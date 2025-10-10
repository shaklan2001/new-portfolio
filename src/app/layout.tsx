import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishant Shaklan — Full Stack & React Native Developer",
  description: "Freelance Full Stack & React Native Developer building high-performance MVPs with clean code, motion, and precision. 1+ year of professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}