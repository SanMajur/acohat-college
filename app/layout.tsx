import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aroma College of Hospitality & Tourism",
  description:
    "Aroma College of Hospitality and Tourism (ACOHAT) is dedicated to providing quality education and training in hospitality and tourism management, empowering individuals to become skilled professionals who contribute to the sustainable development of South Sudan's hospitality industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
