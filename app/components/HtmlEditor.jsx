"use client";
import { convertToRaw, EditorState } from "draft-js";
import { useState ,useEffect} from "react";
import dynamic from 'next/dynamic';
import draftToHtml from "draftjs-to-html";

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false });
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Index() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState();
  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    /*let text = blocks.reduce((acc, item) => {
      acc = acc + item.text;
      return acc;
    }, "");*/
    let text = editorState.getCurrentContent().getPlainText("\u0001");
    setText(text);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access the window object here
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <>
      {/*<div>{draftToHtml(convertToRaw(editorState.getCurrentContent()))}</div>*/}
      {<div style={{ height: "80px", overflow: "auto" }}>{text}</div>}
      {typeof window !== 'undefined' && (
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          mention={{
            separator: " ",
            trigger: "@",
            suggestions: [
              { text: "APPLE", value: "apple" },
              { text: "BANANA", value: "banana", url: "banana" },
              { text: "CHERRY", value: "cherry", url: "cherry" },
              { text: "DURIAN", value: "durian", url: "durian" },
              { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
              { text: "FIG", value: "fig", url: "fig" },
              { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
              { text: "HONEYDEW", value: "honeydew", url: "honeydew" }
            ]
          }}
        />
      )}
    </>
  );
}
