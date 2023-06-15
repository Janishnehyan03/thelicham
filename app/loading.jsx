import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function LoadingPage() {
  return (
    <div role="status" className="flex-1 h-screen items-center justify-center flex">
      <FontAwesomeIcon icon={faCircle} className="animate-spin h-4 mr-2" />
      <p>loading...</p>
    </div>
  );
}

export default LoadingPage;
