"use client"; // This ensures it's a client component

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader"; // Importing Preloader component

interface PreloaderWrapperProps {
  children: React.ReactNode;
}

const PreloaderWrapper: React.FC<PreloaderWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : children} {/* Show preloader or children */}
    </>
  );
};

export default PreloaderWrapper;
