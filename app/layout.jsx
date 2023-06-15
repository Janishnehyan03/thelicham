import { UserContextProvider } from "@/utils/userContext";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

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
