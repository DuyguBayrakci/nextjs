import { Inter } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/global.css";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body className="container">
        <Header />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
