import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import headshotAsset from "@/assets/charlie-headshot.jpg.asset.json";
import { serviceMenu } from "@/data/services";
import { site } from "@/data/site";

//const headshot = headshotAsset.url;
import headshot from "@/assets/charlie-headshot.jpg";

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openMega = () => {
    clearCloseTimer();
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 200);
  };
  const closeMega = () => {
    clearCloseTimer();
    setMegaOpen(false);
  };

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => clearCloseTimer, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-[1360px] items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
          <img
            src={headshot}
            alt="Portrait of Charlie M Richardson, licensed California insurance agent"
            width={816}
            height={816}
            className="h-9 w-9 shrink-0 rounded-md object-cover"
          />
          <span className="truncate text-[15px] font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="mx-auto hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="text-sm text-muted-foreground transition-colors hover:text-gold [&.active]:text-foreground"
          >
            Home
          </Link>
          <div
            ref={megaRef}
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
            onFocus={openMega}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleCloseMega();
            }}
          >
            <button
              type="button"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              onClick={() => {
                if (!megaOpen) openMega();
              }}
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
            </button>
            {megaOpen && (
              <div className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-[18px]">
                <div className="rounded-xl border border-border bg-plum p-7 shadow-[var(--shadow-elegant)] duration-200 animate-in fade-in slide-in-from-top-2">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-7">
                    {serviceMenu.map((group) => (
                      <div key={group.heading}>
                        <p className="text-[13px] font-medium text-gold">{group.heading}</p>
                        <ul className="mt-3 space-y-2">
                          {group.items.map((item) => (
                            <li key={group.heading + item.label}>
                              <Link
                                to="/services/$slug"
                                params={{ slug: item.slug }}
                                onClick={closeMega}
                                className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/about"
            className="text-sm text-muted-foreground transition-colors hover:text-gold [&.active]:text-foreground"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-gold [&.active]:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm text-foreground transition-colors hover:text-gold md:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium transition-colors hover:bg-plum sm:block"
          >
            Get a Free Consultation
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-5 pb-8 pt-2 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-3 text-base text-foreground">
              Home
            </Link>
            <button
              type="button"
              aria-expanded={mobileServices}
              onClick={() => setMobileServices((v) => !v)}
              className="flex items-center justify-between py-3 text-base text-foreground"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
            </button>
            {mobileServices && (
              <div className="space-y-5 border-l border-border pb-2 pl-4">
                {serviceMenu.map((group) => (
                  <div key={group.heading}>
                    <p className="text-[12px] font-medium text-gold">{group.heading}</p>
                    <ul className="mt-2 space-y-2">
                      {group.items.map((item) => (
                        <li key={group.heading + item.label}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: item.slug }}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-sm text-muted-foreground"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <Link to="/about" onClick={() => setMobileOpen(false)} className="py-3 text-base text-foreground">
              About
            </Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="py-3 text-base text-foreground">
              Contact
            </Link>
            <a href={site.phoneHref} className="py-3 text-base text-foreground">
              {site.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gold mt-3 rounded-full px-5 py-3 text-center text-sm"
            >
              Get a Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
