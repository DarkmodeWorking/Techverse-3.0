"use client";

import React, { useState } from "react";
import { HoveredLink, Menu } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="pt-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToEvents = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('events');
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("relative max-w-lg mx-auto z-50", className)}>
      {/* Mobile Menu Toggle Button */}
      <button 
        className="fixed top-4 left-4 lg:hidden text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? '✖️' : '☰'}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-4 ${isOpen ? 'block' : 'hidden'} lg:hidden`}
      >
        <Menu setActive={setActive}>
          <HoveredLink href="/" onClick={() => setIsOpen(false)}>Home</HoveredLink>
          <HoveredLink href="/about" onClick={() => setIsOpen(false)}>About</HoveredLink>
          {/* <HoveredLink href="#" onClick={(e: React.MouseEvent<Element, MouseEvent>) => { handleScrollToEvents(e); setIsOpen(false); }}>Events</HoveredLink> */}
          <HoveredLink href="/contact" onClick={() => setIsOpen(false)}>Contact</HoveredLink>
        </Menu>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:items-center lg:space-x-4  lg:shadow-md lg:justify-center lg:py-2 lg:mx-auto lg:w-full pb-0 mb-0">
        <Menu setActive={setActive}>
          <HoveredLink href="/" onClick={() => setIsOpen(false)}>Home</HoveredLink>
          <HoveredLink href="/about" onClick={() => setIsOpen(false)}>About</HoveredLink>
          <HoveredLink href="/register" onClick={() => setIsOpen(false)}>Register</HoveredLink>
          <HoveredLink href="/contact" onClick={() => setIsOpen(false)}>Contact</HoveredLink>
        </Menu>
      </div>
    </div>
  );
}
