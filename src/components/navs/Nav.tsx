"use client";

import NavHeader from "@/src/components/navs/NavHeader";
import NavMobile from "@/src/components/navs/NavMobile";
import NavDesktop from "@/src/components/navs/NavDesktop";
import { navLinks } from "@/src/utils/comps.config";

import { useState } from "react";
import clsx from "clsx";

interface NavProps {
  variant?: "white" | "default";
  textColor?: string;
}

export default function Nav({
  variant = "default",
  textColor = "#24408d",
}: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav
        id="main-nav"
        data-variant={variant}
        className={clsx(
          "w-full h-[15dvh] z-50 flex items-center justify-between text-[12px] px-4 2xl:px-[12rem] lg:px-[4rem] transition-colors duration-200 ease-in-out",
          variant === "white"
            ? "fixed top-0 bg-white border-b"
            : "fixed md:top-8 bg-transparent text-white",
        )}
        style={variant == "white" ? { color: textColor } : undefined}
      >
        <NavHeader
          variant={variant}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        >
          <NavDesktop links={navLinks} />
        </NavHeader>
      </nav>

      <NavMobile links={navLinks} menuOpen={menuOpen} variant={variant} textColor={textColor} />
    </>
  );
}
