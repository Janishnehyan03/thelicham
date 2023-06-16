"use client";
import { UserContextProvider } from "@/utils/userContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Cover from "./components/Cover";
import Discussions from "./components/Discussions";
import Slider from "./components/Slider";
import TopPosts from "./components/TopPosts";


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
