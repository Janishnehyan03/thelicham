"use client";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useEffect, useState } from "react";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

const HtmlEditor = ({ setHtml }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
    { ssr: false }
  );
  useEffect(() => {
    setHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState]);
  return (
    <>
      {typeof window !== "undefined" && (
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          placeholder="Enter your content here"
        />
      )}
    </>
  );
};

export default HtmlEditor;
