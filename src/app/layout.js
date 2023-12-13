import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import QueryProvider from "@/Providers/QueryProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Alpha Stonks",
  description: "Do stock market analysis at Alpha Stonks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
