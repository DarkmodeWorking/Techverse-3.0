"use state"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandInstagram,
  IconHome,
  IconPhone,
  Icon3dCubeSphere,
} from "@tabler/icons-react";
import Image from "next/image";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <Icon3dCubeSphere className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Contact",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "GNIT",
      icon: (
        <Image
          src="/gurunanoklogo.png"
          width={50}
          height={50}
          alt="Aceternity Logo"
        />
      ),
      href: "https://gnit.ac.in/",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    }
  ];
  return (
    <div className="flex items-center justify-center h-0 md:h-20 w-full">
      <FloatingDock
        // mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  );
}
