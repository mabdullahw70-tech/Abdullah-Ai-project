"use client";
import { useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5" aria-label="Main">
        <a href="#home" className="text-xl font-semibold">Abdullah<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-accent">{l.label}</a></li>
          ))}
        </ul>
        <a href={profile.cv} download className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink hover:brightness-95 md:inline-block">
          Download CV
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </nav>
      {open && (
        <div className="mx-5 rounded-2xl bg-white p-5 text-ink shadow-xl md:hidden">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block font-medium">{l.label}</a></li>
            ))}
          </ul>
          <a href={profile.cv} download className="mt-4 block rounded-full bg-accent py-2.5 text-center text-sm font-semibold">Download CV</a>
        </div>
      )}
    </header>
  );
}
