"use client";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useEffect, useState } from "react";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
const HtmlEditor = ({ setHtml }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    setHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState]);
  return (
    <>
      {typeof window !== "undefined" && (
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      )}
    </>
  );
};

export default HtmlEditor;
