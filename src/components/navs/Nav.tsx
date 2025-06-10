"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import NavHeader from "./NavHeader";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import { navLinks } from "@/src/utils/comps.config";

interface NavProps {
  variant?: "white" | "default";
}

export default function Nav({ variant = "default" }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 115);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        id="main-nav"
        data-variant={variant}
        className={clsx(
          "w-full h-[15dvh] z-50 flex items-center justify-between text-[12px] px-4 2xl:px-[12rem] lg:px-[4rem] transition-colors duration-200 ease-in-out",
          variant === "white" || scrolled
            ? "fixed top-0 bg-white text-[#24408d] border-b"
            : "absolute bg-transparent text-white"
        )}
      >
        <NavHeader
          variant={variant}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          scrolled={scrolled}
        >
          <NavDesktop links={navLinks} />
        </NavHeader>
      </nav>

      <NavMobile links={navLinks} menuOpen={menuOpen} />
    </>
  );
}
