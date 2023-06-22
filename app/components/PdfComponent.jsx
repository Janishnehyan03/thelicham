"use client";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import PageFlip from "react-pageflip";

const PageFlipComponent = () => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="page-flip-container">
      <PageFlip
        flipOnTouch
        showHint
        orientation="horizontal"
        width={400}
        height={600}
        onStartPageChange={() => {}}
        onEndPageChange={() => {}}
        animationDuration={500}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={false}
      >
        <div>
          <Document
            file="https://pdfobject.com/pdf/sample.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={currentPage + 1} width={400} height={600} />
          </Document>
        </div>
        <div>
          <Document
            file="https://pdfobject.com/pdf/sample.pdf"
            onLoadError={(err) => console.error(err)}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={currentPage + 2} width={400} height={600} />
          </Document>
        </div>
      </PageFlip>
      <div className="page-flip__controls">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === numPages - 2}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PageFlipComponent;
