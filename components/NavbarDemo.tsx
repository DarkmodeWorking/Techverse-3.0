// components/NavbarDemo.tsx
"use client";

import React, { useState } from "react";
import { HoveredLink, Menu } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-10" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const handleScrollToEvents = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('events');
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("absolute top-10 inset-x-0 max-w-lg mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/about">About</HoveredLink>
        <HoveredLink href="#" onClick={handleScrollToEvents}>Events</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
      </Menu>
    </div>
  );
}
