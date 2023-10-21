import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
import { ThemeProvider } from "@/Providers/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Groww Stonks",
  description: "Do stock market analysis at Groww Stonks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
