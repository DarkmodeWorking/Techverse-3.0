import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo2.png" // Path to your logo file
        alt="Logo"
        width={300} // Adjust the size according to your needs
        height={300}
        priority
     // Ensures faster loading of the logo
      />
    </div>
  );
};

export default Logo;
