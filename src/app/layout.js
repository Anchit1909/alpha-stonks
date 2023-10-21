import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Groww Stonks",
  description: "Do stock market analysis at Groww Stonks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
