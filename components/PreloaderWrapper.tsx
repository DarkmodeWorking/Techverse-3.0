"use client"; // Make sure this is a client component

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import the hook to get the current route
import Preloader from "@/components/Preloader"; // Import the Preloader component

interface PreloaderWrapperProps {
  children: React.ReactNode;
}

const PreloaderWrapper: React.FC<PreloaderWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    if (pathname === "/") { // Only trigger the preloader for the home page
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); // Simulate 3 seconds loading time
      return () => clearTimeout(timer);
    } else {
      setLoading(false); // If not the home page, don't show the preloader
    }
  }, [pathname]);

  return (
    <>
      {loading ? <Preloader /> : children} {/* Show preloader or content */}
    </>
  );
};

export default PreloaderWrapper;
