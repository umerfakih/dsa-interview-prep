"use client";

import { useState } from "react";

const NAV_ITEMS = ["About", "Experience", "Projects", "Skills", "Contact"];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span
          className={`block h-[1.5px] bg-zinc-300 transition-all duration-300 origin-center ${
            open ? "w-5 translate-y-[6.5px] rotate-45" : "w-5"
          }`}
        />
        <span
          className={`block h-[1.5px] bg-zinc-300 transition-all duration-200 w-4 ${
            open ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block h-[1.5px] bg-zinc-300 transition-all duration-300 origin-center ${
            open ? "w-5 -translate-y-[6.5px] -rotate-45" : "w-3"
          }`}
        />
      </button>

      {/* Dim backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-down panel */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-zinc-800/80 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-0">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-4 text-sm font-medium text-zinc-400 hover:text-white border-b border-zinc-800/50 last:border-0 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 text-center py-3 text-xs font-mono border border-cyan-400/40 text-cyan-400 rounded hover:bg-cyan-400/10 transition-all"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </>
  );
}
