"use client";
import { UserContextProvider } from "@/utils/userContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Cover from "./components/Cover";
import CardMainPage from "./components/CardMainPage";
import Slider from "./components/Slider";
import TopPosts from "./components/TopPosts";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <UserContextProvider>
        {/* <iframe
          src="https://heyzine.com/flip-book/8ce59b8b8c.html"
          frameborder="0"
          className="w-full h-screen"
        ></iframe> */}
        <Slider />
        <Cover />
        <CardMainPage name={"ANTHROPOLOGY"} />
        <CardMainPage name={"series"} />
        <TopPosts />
      </UserContextProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QHE90ZERSN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QHE90ZERSN');
        `}
      </Script>
    </>
  );
}
