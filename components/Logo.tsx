import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 md:left-5 md:transform-none z-50 p-2">
      <Image
        src="/logo2.png" // Path to your logo file
        alt="Logo"
        width={150} // Adjust the size according to your needs
        height={150}
        priority
     // Ensures faster loading of the logo
      />
    </div>
  );
};

export default Logo;
