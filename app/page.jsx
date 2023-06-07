"use client";
import { UserContextProvider } from "@/utils/userContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Cover from "./components/Cover";
import Latest from "./components/Latest";
import TopPosts from "./components/TopPosts";
import { Anek_Malayalam } from "next/font/google";

const notoSansMalayalam = Anek_Malayalam({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <UserContextProvider>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        
        <Cover />
        <Latest />
        <TopPosts />
      </UserContextProvider>
    </>
  );
}
