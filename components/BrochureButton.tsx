import React from "react";

const BrochureButton = () => {
  return (
    <a
      href="/Brochure.pdf" // Path to your PDF file
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-5 right-5 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 border border-transparent rounded-md hover:from-purple-700 hover:to-blue-600 transition-all shadow-md z-50">
      Brochure
    </a>
  );
};

export default BrochureButton;
