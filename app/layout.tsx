import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blend by Malak",
  description: "Mirror, mug, canvas and crochet pop-up workshops in Doha, Qatar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream">{children}</body>
    </html>
  );
}
