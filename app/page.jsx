"use client";
import { UserContextProvider } from "@/utils/userContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Cover from "./components/Cover";
import Latest from "./components/Latest";
import TopPosts from "./components/TopPosts";

export default function Home() {

  return (
    <>
      <UserContextProvider>
        <Cover />
        <Latest />
        <TopPosts />
      </UserContextProvider>
    </>
  );
}
