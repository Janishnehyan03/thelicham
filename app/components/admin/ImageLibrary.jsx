"use client";
import Axios from "@/utils/Axios";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function ImageLibrary() {
  const [images, setImages] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopyLink = (link, index) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);
  };

  const getImages = async () => {
    try {
      let { data } = await Axios.get("/image");
      setImages(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((item, index) => (
        <div
          key={index}
          className={`rounded-lg h-48 w-96 group ${
            hoveredIndex === index ? "bg-gray-200" : "bg-white"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            className="object-cover w-full h-40"
            src={item.url}
            alt="Image"
          />

          <button
            className={`bg-gray-800 hidden transition hover:cursor-pointer group-hover:flex text-white rounded-full p-2 hover:bg-gray-600 ${
              copiedIndex === index ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handleCopyLink(item.url, index)}
            disabled={copiedIndex === index}
          >
            {copiedIndex === index ? "Copied" : "COPY"}{" "}
            <FontAwesomeIcon icon={faCopy} className="ml-3" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ImageLibrary;
