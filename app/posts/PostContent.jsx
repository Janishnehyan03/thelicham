"use client";
import React, { useEffect } from "react";

function PostContent({ details }) {
    useEffect(() => {
        const addReadMoreText = (event) => {
          event.preventDefault(); // Prevent the default copy behavior
    
          const copiedText = window.getSelection().toString();
    
          // Modify the copied text
          const maxLength = 100;
          const truncatedText = copiedText.substring(0, maxLength);
          const modifiedText = `${truncatedText}... Read more: https://thelicham.com`;
    
          // Update the clipboard data with the modified text
          if (event.clipboardData) {
            event.clipboardData.setData("text/plain", modifiedText);
          }
        };
    
        document.addEventListener("copy", addReadMoreText);
    
        return () => {
          document.removeEventListener("copy", addReadMoreText);
        };
      }, []);
  return (
    <div>
      <div
        className={`html-content`}
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Malayalam:wght@400&display=swap");
              p, span {
                font-family: 'Noto Serif Malayalam', serif !important;
                font-size: 18px !important;
              }
              img {
                margin: 14px 0 !important;
                border-radius: 10px !important;
              }
            </style>
            ${details}
          `,
        }}
      ></div>
    </div>
  );
}

export default PostContent;
