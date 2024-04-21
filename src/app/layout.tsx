import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const wydonFont = localFont({
  src: "../assets/fonts/Sdasian-WyDon.ttf",
});

export const metadata: Metadata = {
  title: "Home | Samurai Cat",
  description: "YUKI the first Samurai Cat on Solana.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${wydonFont.className}`}>
        {children}
      </body>
    </html>
  );
}
