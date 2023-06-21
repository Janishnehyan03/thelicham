import React from "react";
// import PdfComponent from "../components/PdfComponent";
import dynamic from "next/dynamic";

const PdfComponent = dynamic(() => import("../components/PdfComponent"), {
  ssr: false
});
function page() {
  return (
    <div>
      <PdfComponent />
    </div>
  );
}

export default page;
