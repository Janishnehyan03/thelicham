import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";
import { UserContextProvider } from "@/utils/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "THELICHAM MONTHLY",
  description: "THELICHAM MONTHLY- DARUL HUDA ISLAMIC UNIVERSITY",
  keywords: "web development, web design, html, css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <Header />
          {children}
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}