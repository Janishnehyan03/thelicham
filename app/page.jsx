"use client";
import { UserContextProvider } from "@/utils/userContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Slider from "./components/Slider";
import Discussions from "./components/Discussions";
import TopPosts from "./components/TopPosts";
import { Anek_Malayalam } from "next/font/google";
import Cover from "./components/Cover";

const notoSansMalayalam = Anek_Malayalam({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <UserContextProvider>
        <Slider />
        <Cover/>
        <Discussions />
        <TopPosts />
      </UserContextProvider>
    </>
  );
}
