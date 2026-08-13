import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts";
import { Footer } from "@/components/layouts";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mazi Gadget",
  description: "We sell premium and good devices. phones, laptop, accessories, starlink voucher.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen">
        <Header />

        <div>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
