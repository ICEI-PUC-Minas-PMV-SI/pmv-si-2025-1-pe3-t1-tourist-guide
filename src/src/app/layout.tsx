import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import BootstrapClient from '../components/BootstrapClient';
import {Toaster} from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable:  "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tourist Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
        <BootstrapClient/>
        <Toaster />
      </body>
    </html>
  );
}
