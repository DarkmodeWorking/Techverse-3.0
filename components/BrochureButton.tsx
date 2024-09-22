import React from "react";

const BrochureButton = () => {
  return (
    <a
      href="/brochure.pdf" // Path to your PDF file
      target="_blank"
      rel="noopener noreferrer"
        className="fixed top-5 right-5 bg-gradient-to-r from-purple-700 to-blue-800 text-white-300 px-4 py-2 border border-transparent rounded-md hover:from-purple-900 hover:to-blue-900 transition-all shadow-md"
    >
      Brochure
    </a>
  );
};

export default BrochureButton;
