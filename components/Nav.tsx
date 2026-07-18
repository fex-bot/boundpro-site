"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/comparison", label: "Compare" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    return pathname === href;
  }

  return (
    <header className={`nav${open ? " open" : ""}`}>
      <div className="container nav-inner">
        <Link className="nav-brand" href="/" aria-label="BoundPro home" onClick={() => setOpen(false)}>
          <img src="/images/logo.svg" alt="BoundPro" width={160} height={28} />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="https://app.boundpro.app/login" className="btn btn-ghost">
            Sign in
          </a>
          <a href="https://app.boundpro.app/signup" className="btn btn-primary">
            Start free trial
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
