import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import localFont from "next/font/local";

import "./globals.scss";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const barlowFont = Barlow({
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

const sabilaFont = localFont({
  src: "../fonts/SabilaRenytha.otf",
  variable: "--font-sabila",
});

export const metadata: Metadata = {
  title: "Madame Lounge Bar",
  description: "Madame Lounge Bar - Agerola, Napoli",
  openGraph: {
    title: "Madame Lounge Bar",
    description: "Madame Lounge Bar - Agerola, Napoli",
    url: "https://madameloungebar.com",
    siteName: "Madame Lounge Bar",
  },
  keywords: [
    "Madame Lounge Bar",
    "Agerola",
    "Napoli",
    "Bar",
    "Lounge",
    "Cocktails",
    "Food",
    "Drinks",
    "Events",
    "Live Music",
    "Relax",
    "Social",
    "Friends",
    "Family",
    "Outdoor Seating",
    "Italian Cuisine",
    "Italian Bar",
    "Italian Lounge",
    "Italian Cocktails",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowFont.variable} ${sabilaFont.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white text-black">
          <Header />
          <main className="container mx-auto flex max-w-2xl flex-1 flex-col items-center px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
